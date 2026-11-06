import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRight } from 'iconoir-react'
import Glasses from './Glasses'
import { palette as c } from '../theme'

function Waves() {
  return (
    <Box component="svg" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden
      sx={{ position: 'absolute', inset: 'auto 0 0 0', width: '100%', height: { xs: 140, md: 220 }, opacity: 0.35 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M0 ${120 + i * 40} C 240 ${60 + i * 40}, 480 ${180 + i * 40}, 720 ${120 + i * 40} S 1200 ${60 + i * 40}, 1440 ${120 + i * 40}`}
          fill="none" stroke={i === 2 ? c.gold : '#fff'} strokeWidth={i === 2 ? 2 : 1} opacity={1 - i * 0.15} />
      ))}
    </Box>
  )
}

export default function Hero() {
  return (
    <Box id="topo" component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: c.navy, color: '#fff' }}>
      <Waves />
      <Container maxWidth="xl" sx={{ position: 'relative', py: { xs: 8, md: 12 }, minHeight: { md: 'calc(100vh - 110px)' }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr' }, alignItems: 'center', gap: { xs: 6, md: 4 } }}>
        <Box>
          <Typography variant="overline" sx={{ color: c.gold }}>Coleção Verão 27 · Surf / Hardcore / Punk</Typography>
          <Typography variant="h1" component="h1" sx={{ mt: 2 }}>
            Olhar<br />de quem<br />
            <Box component="span" sx={{ WebkitTextStroke: '2px #fff', color: 'transparent' }}>não para.</Box>
          </Typography>
          <Typography sx={{ mt: 3, maxWidth: 460, fontSize: '1.08rem', opacity: 0.85, lineHeight: 1.6 }}>
            Óculos de sol pensados no litoral, testados na roda punk e aprovados na estrada. Lentes polarizadas UV400, armações que aguentam o tranco.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 5 }}>
            <Button href="#produtos" variant="contained" endIcon={<ArrowRight />} sx={{ bgcolor: '#fff', color: c.black, '&:hover': { bgcolor: c.gold } }}>
              Comprar agora
            </Button>
            <Button href="#colecoes" variant="outlined" sx={{ color: '#fff', borderColor: '#fff', '&:hover': { borderColor: c.gold, color: c.gold, bgcolor: 'transparent' } }}>
              Ver coleções
            </Button>
          </Stack>
        </Box>

        <Box sx={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
          <Box sx={{ position: 'absolute', width: { xs: 260, md: 440 }, aspectRatio: '1', borderRadius: '50%', border: `2px solid ${c.gold}`, opacity: 0.6 }} />
          <Box sx={{ position: 'absolute', width: { xs: 200, md: 340 }, aspectRatio: '1', borderRadius: '50%', bgcolor: c.sky, opacity: 0.25, filter: 'blur(40px)' }} />
          <Box sx={{ width: '100%', maxWidth: 560, animation: 'hna-float 6s ease-in-out infinite', filter: 'drop-shadow(0 30px 30px rgba(0,0,0,.35))' }}>
            <Glasses shape="wayfarer" frame={c.black} lens={[c.sky, c.black]} accent={c.gold} title="Modelo Mosh" />
          </Box>
          <Box sx={{ position: 'absolute', right: { xs: 0, md: 24 }, bottom: { xs: -10, md: 40 }, bgcolor: c.black, px: 2, py: 1.5, borderLeft: `4px solid ${c.gold}` }}>
            <Typography variant="overline" sx={{ display: 'block', opacity: 0.7, lineHeight: 1.2 }}>Destaque</Typography>
            <Typography sx={{ fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Mosh · R$ 489</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
