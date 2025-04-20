# IOTX Contact Form Server

This is a secure, Express.js-based backend server for the IOTX contact form that uses encrypted email configuration to protect sensitive credentials.

## Features

- Express.js server with secure defaults
- Encrypted email configuration for GitHub safety
- Nodemailer for sending emails
- CORS protection for API security
- Validation for form submissions
- Error handling

## Setup

### Prerequisites

- Node.js 14+ and npm
- A Hostinger email account (or other email provider)

### Installation

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

4. Edit the `.env` file with your actual email configuration:

```
# Server configuration
PORT=3000

# Email configuration
EMAIL_HOST=mail.yourdomain.com  # Your Hostinger SMTP server
EMAIL_PORT=465  # Usually 465 for SSL or 587 for TLS
EMAIL_USER=your-email@yourdomain.com  # Your Hostinger email
EMAIL_PASS=your-password  # Your Hostinger email password

# Security - Generate a strong random string (at least 32 characters)
ENCRYPTION_KEY=your_strong_random_encryption_key

# Frontend origin for CORS
FRONTEND_URL=http://localhost:5173  # Your frontend URL
```

5. Generate the encrypted email configuration:

```bash
node encryptConfig.js
```

This will create a `config.encrypted.js` file which can be safely committed to GitHub.

6. Start the server:

```bash
npm start
```

For development with automatic reloading:

```bash
npm run dev
```

## API Endpoints

### Health Check

```
GET /api/health
```

Returns a simple status check to verify the server is running.

### Contact Form Submission

```
POST /api/contact
```

Accepts form data in the following format:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc.",
  "phone": "+1 555-123-4567",
  "message": "I'd like to learn more about your services."
}
```

Required fields: `name`, `email`, `message`

## Security Notes

- **NEVER** commit your `.env` file to GitHub
- Always keep your `ENCRYPTION_KEY` secure
- The `config.encrypted.js` file can be safely committed to GitHub
- Update the `FRONTEND_URL` in `.env` to restrict CORS access

## Deployment

For production deployment:

1. Set up the server on your hosting provider
2. Configure the environment variables (including a new strong `ENCRYPTION_KEY`)
3. Run `node encryptConfig.js` on the server to generate the encrypted configuration
4. Start the server with `npm start` or use a process manager like PM2

## Connect With Frontend

In your frontend `.env` file, set:

```
VITE_API_URL=http://localhost:3000/api/contact
VITE_CONTACT_EMAIL=contact@iot-x.io
```

Update `VITE_API_URL` with your actual API URL in production. 