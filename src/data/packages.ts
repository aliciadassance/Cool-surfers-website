export type RoomType = 'triple' | 'double' | 'private';

export const ROOM_LABELS: Record<RoomType, string> = {
  triple: 'Triple Shared Room',
  double: 'Double Shared Room',
  private: 'Private Room',
};

export const PRICES: Record<RoomType, { d4: number; d7: number; yoga: number }> = {
  triple: { d4: 290, d7: 460, yoga: 510 },
  double: { d4: 350, d7: 560, yoga: 610 },
  private: { d4: 370, d7: 580, yoga: 630 },
};

export const PACKAGE_OPTIONS = [
  { value: '', label: 'Select a package...' },
  { value: '4-day surf', label: '4-Day Surf Package (from €290)' },
  { value: '7-night surf', label: '1-Week Surf Package (from €460)' },
  { value: 'surf-yoga', label: 'Surf & Yoga Week (from €510)' },
  { value: 'not sure', label: "Not sure yet — help me choose!" },
] as const;

export const DAILY_SCHEDULE = [
  { time: '08:30', title: 'Breakfast', desc: 'Fuel up together before the session', tone: 'light' as const },
  { time: '10:00', title: 'Surf spot hunt', desc: 'Check conditions · find the best waves', tone: 'dark' as const },
  { time: '10:30', title: 'Morning surf session', desc: 'Coaching or guiding based on your level', tone: 'dark' as const },
  { time: '13:00', title: 'Lunch at the beach', desc: 'Fresh food with salty hair and sandy feet', tone: 'light' as const },
  { time: '14:00', title: 'Free surf or adventure', desc: 'Explore at your own pace', tone: 'light' as const },
  { time: '18:00', title: 'Aperitif on the terrace', desc: 'Music · stories · sunset · good vibes', tone: 'husk' as const },
  { time: '20:00', title: 'Dinner & dessert', desc: 'Moroccan flavors served family style', tone: 'coral' as const },
];
