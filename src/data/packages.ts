export type RoomType = 'triple' | 'double' | 'private';

export const ROOM_LABELS: Record<RoomType, string> = {
  triple: 'Triple Shared Room',
  double: 'Private Room',
  private: 'Double or Twin Room',
};

export const PRICES: Record<RoomType, { d4: number; d7: number; yoga: number }> = {
  triple: { d4: 290, d7: 460, yoga: 510 },
  double: { d4: 350, d7: 560, yoga: 610 },
  private: { d4: 370, d7: 580, yoga: 630 },
};

export const PACKAGE_OPTIONS = [
  { value: '', label: 'Select a package...' },
  { value: '4-day surf', label: '4-Day Surf Package' },
  { value: '7-night surf', label: '1-Week Surf Package' },
  { value: 'surf-yoga', label: 'Surf & Yoga Week' },
  { value: 'custom-surf', label: 'Custom length surf experience' },
  { value: 'custom-surf-yoga', label: 'Custom length surf & yoga experience' },
  { value: 'not sure', label: "Not sure yet — help me choose!" },
] as const;

export const PACKAGE_INCLUDED = [
  'Airport or bus station transfers',
  '3 meals a day, along with pre-dinner tea!',
  'Morning surf Coaching or Guiding',
  'Afternoon free surf or alternative activity (if waves are flat)',
  'Surf equipment (board + wetsuit) included',
  'A Visit to the Grand Souk of Agadir! (a very popular field trip)',
];

export const ADD_ONS = [
  { icon: 'mountain', label: 'Paradise Valley Trip', price: 30 },
  { icon: 'bath', label: 'Hammam & Massage', price: 55 },
  { icon: 'route', label: 'Imsouane Trip', price: 40 },
  { icon: 'dunes', label: 'Dunes Sandboarding', price: 30 },
  { icon: 'skateboard', label: 'Surfskate Sessions', price: 7 },
  { icon: 'chefHat', label: 'Cooking Class', price: 15 },
] as const;

export const SEASONS = [
  { icon: 'sun', season: 'Summer', months: 'Jun – Aug', desc: 'Hot and sunny, with lively, crowded beaches. Great energy, warmer water.' },
  { icon: 'leaf', season: 'Spring', months: 'Mar – May', desc: 'Mild weather and gentler, inconsistent waves — ideal for beginners finding their feet.' },
  { icon: 'wave', season: 'Fall', months: 'Sep – Nov', desc: 'Our favorite: consistent swells and still-warm water. The sweet spot for most surfers.' },
  { icon: 'umbrella', season: 'Winter', months: 'Dec – Feb', desc: 'Fewer crowds and the most powerful, consistent swells of the year — best for experienced surfers.' },
] as const;

export const DAILY_SCHEDULE = [
  { time: '08:30', title: 'Breakfast', desc: 'Fuel up together before the session', tone: 'light' as const },
  { time: '10:00', title: 'Surf spot check', desc: 'Conditions + best waves of the day', tone: 'dark' as const },
  { time: '10:30', title: 'Morning surf session', desc: 'Coaching or guiding based on your level', tone: 'dark' as const },
  { time: '13:00', title: 'Lunch at the beach', desc: 'Fresh food with salty hair and sandy feet', tone: 'light' as const },
  { time: '14:00', title: 'Free surf session or adventure', desc: 'Explore at your own pace', tone: 'light' as const },
  { time: '17:00', title: 'Chill on the terrace', desc: 'Optional yoga or hammam visit', tone: 'husk' as const },
  { time: '18:00', title: 'Aperitif time', desc: 'Music · stories · sunset', tone: 'husk' as const },
  { time: '20:00', title: 'Dinner', desc: 'Moroccan flavors, family style', tone: 'coral' as const },
  { time: '21:30', title: 'Games', desc: 'Cards · board games', tone: 'coral' as const },
];
