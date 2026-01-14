const breakpoints = {
  sm: 640,
  md: 768,
  lg: 900,
}

const media = {
  upSm: `(min-width: ${breakpoints.sm}px)`,
  upMd: `(min-width: ${breakpoints.md}px)`,
  upLg: `(min-width: ${breakpoints.lg}px)`,
  downSm: `(max-width: ${breakpoints.sm}px)`,
  downMd: `(max-width: ${breakpoints.md - 1}px)`,
}

export const theme = {
  colors: {
    primary: '#D4A373', // Golden Crust
    secondary: '#2C2C2C', // Charcoal
    background: '#FAFAF8', // Off-white
    text: '#222222',
    accent: '#E6DDC4', // Cream
    white: '#ffffff',
    black: '#000000',
    subtle: '#888888',
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Outfit', sans-serif",
  },
  breakpoints,
  media,
}
