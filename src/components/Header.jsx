import { useEffect, useState } from 'react'
import { AppBar, Box, Container, Drawer, IconButton, Link, Stack, Toolbar, Typography, Badge } from '@mui/material'
import { Menu, Xmark, Search, ShoppingBag, User } from 'iconoir-react'
import { nav } from '../data'
import { palette as c } from '../theme'

export function Logo({ color = c.black, size = 30 }) {
  return (
    <Link href="#topo" aria-label="HNA — início" sx={{ color, display: 'inline-flex', alignItems: 'flex-end', gap: 0.75 }}>
      <Typography component="span" sx={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: size, lineHeight: 1, letterSpacing: '0.04em' }}>
        HNA
      </Typography>
      <Box component="span" sx={{ width: 7, height: 7, bgcolor: c.gold, mb: '5px' }} />
    </Link>
  )
}

export default function Header({ cartCount }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkSx = {
    color: 'text.primary', fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.18em', textTransform: 'uppercase',
    position: 'relative', py: 0.5,
    '&::after': { content: '""', position: 'absolute', left: 0, bottom: 0, height: 2, width: '100%', bgcolor: c.sky, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .25s ease' },
    '&:hover::after': { transform: 'scaleX(1)' },
  }

  return (
    <>
      <Box sx={{ bgcolor: c.black, color: '#fff', textAlign: 'center', py: 1, px: 2 }}>
        <Typography variant="overline" sx={{ fontSize: '0.64rem', display: 'block' }}>
          Frete grátis acima de R$ 399 · <Box component="span" sx={{ color: c.gold }}>Edição Fundação 1912</Box> já disponível
        </Typography>
      </Box>
      <AppBar position="sticky" sx={{ bgcolor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid', borderColor: scrolled ? 'divider' : 'transparent', transition: 'border-color .2s' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 2 }}>
            <IconButton aria-label="Abrir menu" onClick={() => setOpen(true)} sx={{ display: { md: 'none' }, ml: -1 }}>
              <Menu />
            </IconButton>
            <Box sx={{ flex: { xs: 1, md: 'none' }, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Logo />
            </Box>
            <Stack component="nav" direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' }, flex: 1, justifyContent: 'center' }}>
              {nav.map((n) => <Link key={n.href} href={n.href} sx={linkSx}>{n.label}</Link>)}
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ mr: -1 }}>
              <IconButton aria-label="Buscar" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}><Search /></IconButton>
              <IconButton aria-label="Minha conta" sx={{ display: { xs: 'none', sm: 'inline-flex' } }}><User /></IconButton>
              <IconButton aria-label="Sacola">
                <Badge badgeContent={cartCount} sx={{ '& .MuiBadge-badge': { bgcolor: c.gold, color: c.black, fontWeight: 800, borderRadius: 0 } }}>
                  <ShoppingBag />
                </Badge>
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: '100%', maxWidth: 420, bgcolor: c.black, color: '#fff', p: 3 } } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
          <Logo color="#fff" />
          <IconButton aria-label="Fechar menu" onClick={() => setOpen(false)} sx={{ color: '#fff' }}><Xmark /></IconButton>
        </Stack>
        <Stack spacing={1}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} sx={{ color: '#fff', fontFamily: '"Anton", Impact, sans-serif', fontSize: '3rem', textTransform: 'uppercase', lineHeight: 1.1, '&:hover': { color: c.gold } }}>
              {n.label}
            </Link>
          ))}
        </Stack>
      </Drawer>
    </>
  )
}
