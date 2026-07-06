require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); // Parses JSON requests

// Routes
app.post('/api/contact', (req, res) => {
  const { name, email, service, budget, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email, and message.' });
  }

  const query = `INSERT INTO contacts (name, email, service, budget, message) VALUES (?, ?, ?, ?, ?)`;

  db.run(query, [name, email, service, budget, message], async function (err) {
    if (err) {
      console.error('Error inserting message:', err.message);
      return res.status(500).json({ error: 'Failed to save message. Please try again later.' });
    }

    // Try to send email via Brevo
    if (process.env.BREVO_API_KEY) {
      try {
        // 1. Send Notification to Nazmee (the owner)
        await axios.post('https://api.brevo.com/v3/smtp/email', {
          sender: { name: "Portfolio Contact Form", email: process.env.YOUR_EMAIL_ADDRESS },
          to: [{ email: process.env.YOUR_EMAIL_ADDRESS }],
          subject: `New message from ${name}`,
          htmlContent: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service || 'Not specified'}</p>
            <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `
        }, {
          headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json'
          }
        });

        // 2. Send Auto-Reply to the Client
        await axios.post('https://api.brevo.com/v3/smtp/email', {
          sender: { name: "Nazmee Jawed", email: process.env.YOUR_EMAIL_ADDRESS },
          to: [{ email: email }],
          subject: `Thank you for contacting me!`,
          htmlContent: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <h2>Hi ${name},</h2>
              <p>Thank you for contacting Nazmee Jawed!</p>
              <p>I have received your message and will get back to you as soon as possible.</p>
              <br>
              <p>Best regards,</p>
              <p><strong>Nazmee Jawed</strong></p>
              <p><a href="https://nazmeejawed.github.io/">My Portfolio</a></p>
            </div>
          `
        }, {
          headers: {
            'api-key': process.env.BREVO_API_KEY,
            'Content-Type': 'application/json'
          }
        });

        console.log("Both emails sent successfully via Brevo!");
      } catch (emailError) {
        console.error("Error sending email via Brevo:", emailError.response ? emailError.response.data : emailError.message);
        // We still return success to the frontend because it saved in the DB
      }
    } else {
      console.log("BREVO_API_KEY not found in .env, skipping email notification.");
    }

    // Respond with success
    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: { id: this.lastID, name, email }
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
