import { createTheme } from '@mui/material/styles'

export const palette = {
  white: '#FFFFFF',
  black: '#121212',
  navy: '#1A4B84',
  sky: '#3B82F6',
  gold: '#D4AF37',
  gray: '#F4F4F2',
  line: 'rgba(18,18,18,0.12)',
}

const display = '"Anton", "Impact", "Arial Narrow", sans-serif'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: palette.black, contrastText: palette.white },
    secondary: { main: palette.navy, contrastText: palette.white },
    info: { main: palette.sky },
    warning: { main: palette.gold, contrastText: palette.black },
    background: { default: palette.white, paper: palette.white },
    text: { primary: palette.black, secondary: 'rgba(18,18,18,0.64)' },
    divider: palette.line,
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif',
    h1: { fontFamily: display, fontWeight: 400, textTransform: 'uppercase', lineHeight: 0.96, letterSpacing: '-0.01em' },
    h2: { fontFamily: display, fontWeight: 400, textTransform: 'uppercase', lineHeight: 0.95 },
    h3: { fontFamily: display, fontWeight: 400, textTransform: 'uppercase', lineHeight: 1 },
    h4: { fontFamily: display, fontWeight: 400, textTransform: 'uppercase', lineHeight: 1.05 },
    h5: { fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.02em' },
    h6: { fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', fontSize: '0.95rem' },
    overline: { fontWeight: 700, letterSpacing: '0.24em', fontSize: '0.72rem', lineHeight: 1.6 },
    button: { fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: '0.78rem' },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { padding: '14px 28px', borderRadius: 0, transition: 'all .2s ease' },
        outlined: { borderWidth: 2, '&:hover': { borderWidth: 2 } },
      },
    },
    MuiLink: { defaultProps: { underline: 'none' } },
    MuiAppBar: { defaultProps: { elevation: 0, color: 'inherit' } },
    MuiChip: { styleOverrides: { root: { borderRadius: 0, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontSize: '0.66rem' } } },
    MuiTextField: { defaultProps: { variant: 'outlined' } },
    MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 0 } } },
  },
})

theme.typography.h1 = { ...theme.typography.h1, fontSize: 'clamp(3.6rem, 13vw, 11rem)' }
theme.typography.h2 = { ...theme.typography.h2, fontSize: 'clamp(2.6rem, 7vw, 5.5rem)' }
theme.typography.h3 = { ...theme.typography.h3, fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }
theme.typography.h4 = { ...theme.typography.h4, fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)' }

export default theme
