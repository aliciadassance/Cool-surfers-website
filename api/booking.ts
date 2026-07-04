import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { teamNotificationEmail, customerConfirmationEmail, type BookingDetails } from './_email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.BOOKING_TO_EMAIL || 'coolsurfersmorocco@gmail.com';
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || 'onboarding@resend.dev';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as BookingDetails;
  const { name, email, phone, pkg, arrivalDate, departureDate, people, message } = body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const details: BookingDetails = { name, email, phone, pkg, arrivalDate, departureDate, people, message };

  try {
    const { error: teamError } = await resend.emails.send({
      from: `Cool Surfers Morocco Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New booking request from ${name}`,
      html: teamNotificationEmail(details),
    });

    if (teamError) {
      console.error('Resend error (team notification):', teamError);
      return res.status(502).json({ error: 'Failed to send email' });
    }

    const { error: customerError } = await resend.emails.send({
      from: `Cool Surfers Morocco <${FROM_EMAIL}>`,
      to: email,
      replyTo: TO_EMAIL,
      subject: `We've got your booking request, ${name}! 🤙`,
      html: customerConfirmationEmail(details),
    });

    if (customerError) {
      // Team notification already sent successfully — log but don't fail the request over the confirmation email.
      console.error('Resend error (customer confirmation):', customerError);
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Booking email error:', err);
    return res.status(500).json({ error: 'Unexpected error' });
  }
}
