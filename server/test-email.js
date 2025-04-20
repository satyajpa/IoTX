const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

async function testEmailConfig() {
  console.log('Testing Hostinger email configuration...');
  console.log('-------------------------------------');
  console.log('Host:', process.env.EMAIL_HOST);
  console.log('Port:', process.env.EMAIL_PORT);
  console.log('User:', process.env.EMAIL_USER);
  console.log('Password:', '********');
  console.log('Secure:', process.env.EMAIL_PORT === '465' ? 'Yes (SSL)' : 'No');
  console.log('-------------------------------------');

  // Create transporter with Hostinger-specific configuration
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    debug: true,
    logger: true
  });

  // Verify connection
  try {
    console.log('Verifying SMTP connection...');
    const verifyResult = await transporter.verify();
    console.log('SMTP connection verified successfully!');
  } catch (error) {
    console.error('SMTP connection verification failed:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error response:', error.response);
    console.error('Error stack:', error.stack);
    
    // Provide troubleshooting tips based on error code
    if (error.code === 'ECONNREFUSED') {
      console.log('\nTROUBLESHOOTING:');
      console.log('- Check if the email host is correct');
      console.log('- Verify that there are no firewalls blocking the connection');
      console.log('- Ensure port 465 (or the port you\'re using) is open');
    } else if (error.code === 'EAUTH') {
      console.log('\nTROUBLESHOOTING:');
      console.log('- Check if your email and password are correct');
      console.log('- Ensure that your Hostinger account has SMTP access enabled');
      console.log('- Check if you need to use an app-specific password');
    } else if (error.code === 'ESOCKET') {
      console.log('\nTROUBLESHOOTING:');
      console.log('- Check SSL/TLS settings');
      console.log('- Try changing port from 465 to 587 and set secure: false');
    }
    
    return;
  }

  // Try to send a test email
  try {
    console.log('\nSending test email...');
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to self for testing
      subject: 'Test Email from IoT X Contact Form',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify that the SMTP configuration is working correctly.</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        <hr>
        <p><small>This is an automated test email.</small></p>
      `
    });

    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
    
    console.log('\nCONFIGURATION CORRECT! Your email system is working properly.');
  } catch (error) {
    console.error('Failed to send test email:');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    // Provide specific troubleshooting tips for sending errors
    console.log('\nTROUBLESHOOTING:');
    if (error.responseCode >= 500) {
      console.log('- Server error: The mail server encountered an error');
      console.log('- Check with Hostinger support about any sending restrictions');
    } else if (error.responseCode >= 400) {
      console.log('- Client error: There is an issue with your request');
      console.log('- Check the from/to email addresses');
      console.log('- Ensure your account is allowed to send emails');
    }
    
    console.log('- Double-check your Hostinger SMTP settings');
    console.log('- For Hostinger, try these alternative settings:');
    console.log('  - Try port 587 with secure: false');
    console.log('  - Try using an App Password if 2FA is enabled');
  }
}

// Run the test
testEmailConfig().catch(console.error); 