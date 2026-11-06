import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { IconoirProvider } from 'iconoir-react'
import theme from './theme'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconoirProvider iconProps={{ strokeWidth: 1.6, width: '1.25em', height: '1.25em' }}>
        <App />
      </IconoirProvider>
    </ThemeProvider>
  </StrictMode>,
)
