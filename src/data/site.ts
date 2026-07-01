export const SITE = {
  whatsappNumber: '212769653725',
  whatsappDisplay: '+212 769-653725',
  email: 'coolsurfersmorocco@gmail.com',
  instagramHandle: '@cool_surfers_morocco',
  instagramUrl: 'https://www.instagram.com/cool_surfers_morocco/',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cool+surfeurs+Morocco',
  address: ['Tamraght, Taghazout Bay', 'Agadir, Morocco'],
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'The House', to: '/house' },
  { label: 'Packages', to: '/packages' },
  { label: 'Contact', to: '/contact' },
] as const;
