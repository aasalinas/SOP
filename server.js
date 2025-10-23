/**
 * School of Purpose - Backend Server
 * Handles Stripe payments, SendGrid emails, and Twilio SMS
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const sgMail = require('@sendgrid/mail');
const twilio = require('twilio');

// Initialize
const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// ===== STRIPE ENDPOINTS =====

/**
 * POST /api/create-payment-intent
 * Create a Stripe payment intent
 */
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, studentName, studentEmail } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        studentName,
        studentEmail,
        timestamp: new Date().toISOString()
      }
    });

    res.json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: amount
    });
  } catch (error) {
    console.error('Payment Intent Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/confirm-payment
 * Confirm payment status
 */
app.post('/api/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId } = req.body;

    if (!paymentIntentId) {
      return res.status(400).json({ error: 'Payment Intent ID required' });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    res.json({
      success: true,
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100,
      paymentIntentId: paymentIntent.id
    });
  } catch (error) {
    console.error('Confirm Payment Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/generate-payment-link
 * Generate a Stripe payment link
 */
app.post('/api/generate-payment-link', async (req, res) => {
  try {
    const { amount, studentName, studentEmail } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `School of Purpose - Payment for ${studentName}`,
              description: `Payment for ${studentName}`
            },
            unit_amount: Math.round(amount * 100)
          },
          quantity: 1
        }
      ],
      after_completion: {
        type: 'redirect',
        redirect: {
          url: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/payment-success`
        }
      }
    });

    res.json({
      success: true,
      paymentLink: paymentLink.url,
      linkId: paymentLink.id
    });
  } catch (error) {
    console.error('Payment Link Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===== SENDGRID ENDPOINTS =====

/**
 * POST /api/send-email
 * Send a single email
 */
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html, studentName } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const msg = {
      to,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      html,
      replyTo: 'support@schoolofpurpose.org'
    };

    const response = await sgMail.send(msg);

    res.json({
      success: true,
      messageId: response[0].headers['x-message-id'],
      status: 'Email sent successfully'
    });
  } catch (error) {
    console.error('SendGrid Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/send-bulk-email
 * Send bulk emails to multiple students
 */
app.post('/api/send-bulk-email', async (req, res) => {
  try {
    const { recipients, subject, html } = req.body;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return res.status(400).json({ error: 'Invalid recipients' });
    }

    if (!subject || !html) {
      return res.status(400).json({ error: 'Missing subject or html' });
    }

    const messages = recipients.map(email => ({
      to: email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject,
      html,
      replyTo: 'support@schoolofpurpose.org'
    }));

    const response = await sgMail.sendMultiple(messages);

    res.json({
      success: true,
      emailsSent: response.length,
      status: `${response.length} emails sent successfully`
    });
  } catch (error) {
    console.error('Bulk Email Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===== TWILIO ENDPOINTS =====

/**
 * POST /api/send-sms
 * Send a single SMS
 */
app.post('/api/send-sms', async (req, res) => {
  try {
    const { to, message } = req.body;

    if (!to || !message) {
      return res.status(400).json({ error: 'Missing phone or message' });
    }

    const sms = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });

    res.json({
      success: true,
      messageId: sms.sid,
      status: sms.status
    });
  } catch (error) {
    console.error('Twilio Error:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * POST /api/send-bulk-sms
 * Send bulk SMS to multiple students
 */
app.post('/api/send-bulk-sms', async (req, res) => {
  try {
    const { recipients, message } = req.body;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      return res.status(400).json({ error: 'Invalid recipients' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Missing message' });
    }

    const results = [];
    for (const phoneNumber of recipients) {
      const sms = await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: phoneNumber
      });
      results.push({ phoneNumber, messageId: sms.sid, status: sms.status });
    }

    res.json({
      success: true,
      smsSent: results.length,
      results,
      status: `${results.length} SMS sent successfully`
    });
  } catch (error) {
    console.error('Bulk SMS Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ===== HEALTH CHECK =====

/**
 * GET /api/health
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    apis: {
      stripe: 'Ready',
      sendgrid: 'Ready',
      twilio: 'Ready'
    }
  });
});

// ===== ERROR HANDLING =====

app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ===== START SERVER =====

app.listen(PORT, () => {
  console.log(`\n🚀 School of Purpose Server Running`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`\n✅ APIs Ready:`);
  console.log(`   • Stripe Payment Processing`);
  console.log(`   • SendGrid Email Service`);
  console.log(`   • Twilio SMS Service\n`);
});

module.exports = app;

