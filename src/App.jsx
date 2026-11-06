import { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Products from './components/Products'
import Collections from './components/Collections'
import About from './components/About'
import Team from './components/Team'
import Perks from './components/Perks'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { palette as c } from './theme'

export default function App() {
  const [cart, setCart] = useState([])
  const [toast, setToast] = useState(null)

  const add = (p) => {
    setCart((xs) => [...xs, p])
    setToast(`${p.name} foi para a sacola`)
  }

  return (
    <>
      <Header cartCount={cart.length} />
      <main>
        <Hero />
        <Marquee />
        <Products onAdd={add} />
        <Collections />
        <Marquee bg={c.white} fg={c.black} />
        <About />
        <Team />
        <Perks />
        <Newsletter />
      </main>
      <Footer />
      <Snackbar open={!!toast} autoHideDuration={2500} onClose={() => setToast(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert severity="success" variant="filled" onClose={() => setToast(null)} sx={{ borderRadius: 0, bgcolor: c.black, '& .MuiAlert-icon': { color: c.gold } }}>
          {toast}
        </Alert>
      </Snackbar>
    </>
  )
}
