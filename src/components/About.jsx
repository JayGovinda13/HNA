import { Box, Container, Typography } from '@mui/material'
import { palette as c } from '../theme'

const stats = [
  { n: '1912', l: 'O dourado das origens' },
  { n: 'UV400', l: 'Em todas as lentes' },
  { n: '100%', l: 'Desenhado no litoral' },
]

export default function About() {
  return (
    <Box id="sobre" component="section" sx={{ bgcolor: c.black, color: '#fff', py: { xs: 10, md: 16 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: c.gold }}>Manifesto</Typography>
        <Typography variant="h3" component="h2" sx={{ mt: 3, fontSize: 'clamp(2.2rem, 5.4vw, 4.6rem)', lineHeight: 1.02 }}>
          Nascemos entre a <Box component="span" sx={{ color: c.sky }}>espuma do mar</Box> e a microfonia do amplificador.
          Branco e preto na alma, <Box component="span" sx={{ color: c.gold }}>dourado</Box> na história.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 8 }, mt: { xs: 6, md: 10 } }}>
          <Typography sx={{ opacity: 0.75, lineHeight: 1.8 }}>
            A HNA começou como um coletivo de surfistas que também tocavam em bandas — ou de músicos que fugiam pro mar entre um show e outro.
            A gente queria óculos que encarassem o sol do meio-dia, o sal, o suor e o mosh sem pedir licença.
          </Typography>
          <Typography sx={{ opacity: 0.75, lineHeight: 1.8 }}>
            Cada modelo é desenhado com poucas linhas e muita intenção: acetato de alta resistência, lentes polarizadas e um acabamento limpo.
            Sem logo gritando. O barulho fica por sua conta.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, mt: { xs: 6, md: 10 }, borderTop: '1px solid rgba(255,255,255,.15)' }}>
          {stats.map((s, i) => (
            <Box key={s.n} sx={{ pt: 4, pb: { xs: 2, sm: 0 }, pl: { sm: i ? 4 : 0 }, borderLeft: { sm: i ? '1px solid rgba(255,255,255,.15)' : 'none' } }}>
              <Typography sx={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: { xs: '3rem', md: '4rem' }, lineHeight: 1, color: i === 0 ? c.gold : '#fff' }}>{s.n}</Typography>
              <Typography variant="overline" sx={{ opacity: 0.6 }}>{s.l}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
