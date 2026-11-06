import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material'
import { Instagram, Youtube, Tiktok, MapPin } from 'iconoir-react'
import { Logo } from './Header'
import { palette as c } from '../theme'

const YEAR = new Date().getFullYear()

const cols = [
  { title: 'Loja', links: ['Óculos de sol', 'Óculos de grau', 'Lentes polarizadas', 'Acessórios', 'Gift card'] },
  { title: 'HNA', links: ['Sobre nós', 'Equipe', 'Sessions', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Trocas e devoluções', 'Garantia', 'Rastrear pedido', 'Fale com a gente'] },
]

export default function Footer() {
  return (
    <Box id="contato" component="footer" sx={{ bgcolor: c.black, color: '#fff', pt: { xs: 8, md: 12 }, pb: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.4fr repeat(3, 1fr)' }, gap: 6 }}>
          <Box>
            <Logo color="#fff" size={44} />
            <Typography sx={{ mt: 2, opacity: 0.6, maxWidth: 320, lineHeight: 1.7 }}>
              Óculos para quem vive o mar, o barulho e a estrada. Surf, Hardcore e Punk Rock desde a primeira onda.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1.5, alignItems: 'center', opacity: 0.6 }}>
              <MapPin width={18} height={18} />
              <Typography variant="body2">Flagship · Litoral de São Paulo</Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 3, ml: -1 }}>
              {[[Instagram, 'Instagram'], [Youtube, 'YouTube'], [Tiktok, 'TikTok']].map(([I, l]) => (
                <IconButton key={l} aria-label={l} sx={{ color: '#fff', '&:hover': { color: c.gold } }}><I /></IconButton>
              ))}
            </Stack>
          </Box>
          {cols.map((col) => (
            <Box key={col.title}>
              <Typography variant="overline" sx={{ color: c.gold }}>{col.title}</Typography>
              <Stack spacing={1.25} sx={{ mt: 2 }}>
                {col.links.map((l) => (
                  <Link key={l} href="#" sx={{ color: 'rgba(255,255,255,.75)', fontSize: '0.92rem', '&:hover': { color: '#fff' } }}>{l}</Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Typography aria-hidden sx={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: 'clamp(6rem, 28vw, 26rem)', lineHeight: 0.8, textAlign: 'center', mt: { xs: 8, md: 12 }, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,.18)', userSelect: 'none' }}>
          HNA
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 1, mt: 4, pt: 3, borderTop: '1px solid rgba(255,255,255,.12)' }}>
          <Typography variant="caption" sx={{ opacity: 0.5 }}>© {YEAR} HNA Eyewear. Todos os direitos reservados.</Typography>
          <Stack direction="row" spacing={3}>
            {['Privacidade', 'Termos'].map((l) => (
              <Link key={l} href="#" variant="caption" sx={{ color: 'rgba(255,255,255,.5)', '&:hover': { color: '#fff' } }}>{l}</Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
