export const colors = {
  shell: '#FBF6EC',
  coconut: '#F2EBD8',
  sand: '#EDE8DB',
  husk: '#A98662',
  bark: '#3A2A1E',
  lime: '#A8D24A',
  coral: '#D6602E',
  white: '#FFFFFF',
} as const;

export const fonts = {
  display: "'TAN Nimbus', Georgia, serif",
  heading: "'Open Sauce One', Georgia, serif",
  body: "'Open Sauce Sans', sans-serif",
} as const;

export type ColorToken = keyof typeof colors;
