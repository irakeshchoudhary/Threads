// pages/api/uploadthing-webhook.js
import crypto from 'crypto';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Verify the webhook signature
  const signature = req.headers['x-uploadthing-signature'];
  const body = JSON.stringify(req.body);
  const secret = process.env.UPLOADTHING_WEBHOOK_SECRET;
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(body)
    .digest('hex');

  if (signature !== expectedSignature) {
    return res.status(401).json({ message: 'Invalid signature' });
  }

  // Process the webhook payload
  const payload = req.body;

  // Handle the payload as needed
  console.log('Webhook payload:', payload);

  res.status(200).json({ message: 'Webhook received successfully' });
}

export const config = {
  api: {
    bodyParser: true,
  },
};