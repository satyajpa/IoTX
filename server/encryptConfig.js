const fs = require('fs');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

if (!ENCRYPTION_KEY) {
  console.error('ENCRYPTION_KEY is not set in .env file');
  process.exit(1);
}

// Email configuration to encrypt
const emailConfig = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
};

// Encrypt the configuration
const encryptedConfig = CryptoJS.AES.encrypt(
  JSON.stringify(emailConfig),
  ENCRYPTION_KEY
).toString();

// Save to a file
const fileContent = `// This file contains encrypted email configuration
// Do not modify this file manually
module.exports = "${encryptedConfig}";
`;

fs.writeFileSync('config.encrypted.js', fileContent);

console.log('Email configuration encrypted and saved to config.encrypted.js');
console.log('You can safely commit this file to version control.');
console.log('');
console.log('IMPORTANT: Keep your ENCRYPTION_KEY secure and do not commit it to version control!'); 