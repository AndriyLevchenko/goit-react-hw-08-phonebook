export const theme = Object.freeze({
  colors: {
    accent: '#df4f06',
    white: '#fff',
    gray: '#9e9e9e',
    green: '#2b5749',
    light: '#f2f2f2',
    dark: '#212121',
    primary: '#353539',
    mainBackground: ['linear-gradient(to top, #5e9b5e, #fff)'],
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '30px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(213, 206, 206, 0.23)',
    regular: '0px 4px 10px 4px #655e5e',
    medium: '0 9px 47px 11px rgba(32, 30, 30, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
