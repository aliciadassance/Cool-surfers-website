import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.BOOKING_TO_EMAIL || 'coolsurfersmorocco@gmail.com';
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || 'onboarding@resend.dev';

interface BookingPayload {
  name?: string;
  email?: string;
  phone?: string;
  pkg?: string;
  arrivalDate?: string;
  departureDate?: string;
  people?: string;
  message?: string;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] as string));

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body as BookingPayload;
  const { name, email, phone, pkg, arrivalDate, departureDate, people, message } = body || {};

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const rows: [string, string | undefined][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Package', pkg],
    ['Arrival', arrivalDate],
    ['Departure', departureDate],
    ['People', people],
    ['Message', message],
  ];

  const htmlRows = rows
    .filter(([, value]) => !!value)
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:600;">${label}</td><td style="padding:4px 0;">${escapeHtml(String(value))}</td></tr>`)
    .join('');

  const customerHtmlRows = rows
    .filter(([label, value]) => !!value && label !== 'Email')
    .map(([label, value]) => `<tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:600;">${label}</td><td style="padding:4px 0;">${escapeHtml(String(value))}</td></tr>`)
    .join('');

  try {
    const { error: teamError } = await resend.emails.send({
      from: `Cool Surfers Morocco Website <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New booking request from ${name}`,
      html: `<table>${htmlRows}</table>`,
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
      html: `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out to Cool Surfers Morocco! Here's a recap of what you sent us — we'll get back to you within 24 hours to confirm.</p>
        <table>${customerHtmlRows}</table>
        <p>If anything above looks wrong, just reply to this email and let us know.</p>
        <p>See you in Tamraght 🌊</p>
      `,
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
