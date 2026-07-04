const COLORS = {
  bark: '#3a2a1e',
  lime: '#a8d24a',
  coral: '#d6602e',
  husk: '#a98662',
  shell: '#fbf6ec',
  coconut: '#f2ebd8',
  white: '#ffffff',
};

const SITE = {
  whatsappNumber: '212769653725',
  whatsappDisplay: '+212 769-653725',
  email: 'coolsurfersmorocco@gmail.com',
  instagramUrl: 'https://www.instagram.com/cool_surfers_morocco/',
  instagramHandle: '@cool_surfers_morocco',
};

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' } as Record<string, string>)[char]);

const PACKAGE_LABELS: Record<string, string> = {
  '4-day surf': '4-Day Surf Package',
  '7-night surf': '1-Week Surf Package',
  'surf-yoga': 'Surf & Yoga Week',
  'custom-surf': 'Custom length surf experience',
  'custom-surf-yoga': 'Custom length surf & yoga experience',
  'not sure': "Not sure yet — help me choose",
};

export function formatPackage(value?: string) {
  if (!value) return undefined;
  return PACKAGE_LABELS[value] || value;
}

export function formatDate(value?: string) {
  if (!value) return undefined;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return value;
  const [, year, month, day] = match;
  return `${day}/${month}/${year}`;
}

function detailsTable(rows: Array<[string, string | undefined]>) {
  const cells = rows
    .filter(([, value]) => !!value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid ${COLORS.coconut};font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:${COLORS.husk};white-space:nowrap;vertical-align:top;">${label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid ${COLORS.coconut};font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${COLORS.bark};line-height:1.5;">${escapeHtml(String(value))}</td>
        </tr>`
    )
    .join('');

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.white};border-radius:14px;overflow:hidden;border:1px solid ${COLORS.coconut};">
      ${cells}
    </table>`;
}

function button(label: string, href: string, bg: string, color: string) {
  return `
    <a href="${href}" target="_blank" style="display:inline-block;background:${bg};color:${color};font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:100px;">
      ${label}
    </a>`;
}

function shell(opts: { preheader: string; heading: string; bodyHtml: string }) {
  const { preheader, heading, bodyHtml } = opts;
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background:${COLORS.coconut};">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.coconut};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${COLORS.shell};border-radius:24px;overflow:hidden;">
            <tr>
              <td style="background:${COLORS.bark};padding:36px 40px;text-align:center;">
                <p style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:${COLORS.lime};">
                  Cool Surfers Morocco
                </p>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:26px;font-weight:400;color:${COLORS.shell};line-height:1.3;">
                  ${heading}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:36px 40px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background:${COLORS.coconut};padding:24px 40px;text-align:center;">
                <p style="margin:0 0 8px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${COLORS.husk};">
                  Tamraght, Taghazout Bay &middot; Agadir, Morocco
                </p>
                <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;color:${COLORS.husk};">
                  <a href="https://wa.me/${SITE.whatsappNumber}" style="color:${COLORS.husk};text-decoration:underline;">${SITE.whatsappDisplay}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="mailto:${SITE.email}" style="color:${COLORS.husk};text-decoration:underline;">${SITE.email}</a>
                  &nbsp;&middot;&nbsp;
                  <a href="${SITE.instagramUrl}" style="color:${COLORS.husk};text-decoration:underline;">${SITE.instagramHandle}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export interface BookingDetails {
  name: string;
  email: string;
  phone?: string;
  pkg?: string;
  arrivalDate?: string;
  departureDate?: string;
  people?: string;
  message?: string;
}

export function teamNotificationEmail(details: BookingDetails) {
  const { name, email, phone, pkg, arrivalDate, departureDate, people, message } = details;

  const rows: Array<[string, string | undefined]> = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Package', formatPackage(pkg)],
    ['Arrival', formatDate(arrivalDate)],
    ['Departure', formatDate(departureDate)],
    ['People', people],
    ['Message', message],
  ];

  const ctaRow = phone
    ? button('Message on WhatsApp', `https://wa.me/${phone.replace(/[^\d]/g, '')}`, COLORS.lime, COLORS.bark)
    : button('Reply by Email', `mailto:${email}`, COLORS.lime, COLORS.bark);

  const bodyHtml = `
    <p style="margin:0 0 24px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${COLORS.bark};line-height:1.6;">
      You've got a new booking request from <strong>${escapeHtml(name)}</strong>.
    </p>
    ${detailsTable(rows)}
    <div style="text-align:center;margin-top:28px;">
      ${ctaRow}
    </div>
  `;

  return shell({
    preheader: `New booking request from ${name}`,
    heading: 'New booking request',
    bodyHtml,
  });
}

export function customerConfirmationEmail(details: BookingDetails) {
  const { name, phone, pkg, arrivalDate, departureDate, people, message } = details;

  const rows: Array<[string, string | undefined]> = [
    ['Package', formatPackage(pkg)],
    ['Arrival', formatDate(arrivalDate)],
    ['Departure', formatDate(departureDate)],
    ['People', people],
    ['Phone', phone],
    ['Message', message],
  ];

  const bodyHtml = `
    <p style="margin:0 0 16px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${COLORS.bark};line-height:1.6;">
      Hi ${escapeHtml(name)},
    </p>
    <p style="margin:0 0 28px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${COLORS.bark};line-height:1.6;">
      Thanks for reaching out to Cool Surfers Morocco! We've received your booking request and we'll get back to you <strong>within 24 hours</strong> to confirm everything. Here's a recap of what you sent us:
    </p>
    ${detailsTable(rows)}
    <p style="margin:28px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${COLORS.bark};line-height:1.6;opacity:0.8;">
      Spotted a mistake, or want to add something? Just reply to this email — it comes straight to our inbox.
    </p>
    <div style="text-align:center;margin-top:28px;">
      ${button('Chat with us on WhatsApp', `https://wa.me/${SITE.whatsappNumber}`, COLORS.lime, COLORS.bark)}
    </div>
    <p style="margin:28px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${COLORS.bark};line-height:1.6;text-align:center;">
      See you in Tamraght!
    </p>
  `;

  return shell({
    preheader: `We've received your booking request, ${name}!`,
    heading: "We've got your request!",
    bodyHtml,
  });
}
