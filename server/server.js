const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'https://iot-x.io'; // Updated default to production URL

// More secure helmet configuration for production
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production',
  crossOriginEmbedderPolicy: process.env.NODE_ENV === 'production'
}));

// Configure CORS to allow requests only from the frontend
app.use(cors({
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json({ limit: '500kb' })); // Limit payload size for security

// Email configuration logging - only in development
if (process.env.NODE_ENV !== 'production') {
  console.log('Email Configuration (without password):');
  console.log({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: '********' // Masked for security
    }
  });
}

// Create email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: process.env.NODE_ENV !== 'production', // Only debug in non-production
  logger: process.env.NODE_ENV !== 'production', // Only log in non-production
  tls: {
    // In production, should validate certs
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  }
});

// Verify email connection
transporter.verify((error) => {
  if (error) {
    console.error('Email transporter verification error:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    
    if (process.env.NODE_ENV !== 'production') {
      console.error('Error stack:', error.stack);
    }
  } else {
    console.log('Email transporter is ready to send messages');
  }
});

// Health check endpoint - keep this minimal in production
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Rate limiting helper to prevent abuse
const requestCounts = {};
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT = 5; // 5 requests per hour per IP

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  // Simple rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = Date.now();
  
  // Clean up old entries
  for (const ipKey in requestCounts) {
    if (requestCounts[ipKey].timestamp < now - RATE_LIMIT_WINDOW) {
      delete requestCounts[ipKey];
    }
  }
  
  // Check rate limit
  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 0, timestamp: now };
  }
  
  if (requestCounts[ip].count >= RATE_LIMIT) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.'
    });
  }
  
  requestCounts[ip].count++;
  
  // Log only in non-production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Received contact form submission:', req.body);
  }
  
  try {
    const { name, email, company, phone, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email and message are required fields' 
      });
    }
    
    // Sanitize and validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format');
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }
    
    // Check message length to prevent spam
    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long'
      });
    }
    
    // Prepare email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || 'contact@iot-x.io',
      subject: 'New Contact Form Submission from IoT X Website',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from the IoT X website contact form.</small></p>
      `
    };
    
    if (process.env.NODE_ENV !== 'production') {
      console.log('Attempting to send email with options:', {
        from: mailOptions.from,
        to: mailOptions.to,
        subject: mailOptions.subject
      });
    }
    
    // Send email with detailed error capture
    try {
      const info = await transporter.sendMail(mailOptions);
      
      if (process.env.NODE_ENV !== 'production') {
        console.log('Email sent successfully:');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
      }
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError.message);
      
      if (process.env.NODE_ENV !== 'production') {
        console.error('Detailed email sending error:');
        console.error('Error name:', emailError.name);
        console.error('Error message:', emailError.message);
        console.error('Error code:', emailError.code);
        console.error('Error command:', emailError.command);
      }
      
      // Return error with limited details in production
      res.status(500).json({ 
        success: false, 
        message: process.env.NODE_ENV === 'production' 
          ? 'Failed to send your message. Please try again later.'
          : `Failed to send your message: ${emailError.message}`,
        errorCode: process.env.NODE_ENV === 'production' ? undefined : emailError.code
      });
    }
  } catch (error) {
    console.error('General error during form processing:', error.message);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process your message. Please try again later.' 
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Mail server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
  console.log(`Accepting requests from: ${FRONTEND_URL}`);
}); 