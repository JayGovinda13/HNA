import { Box, Container, IconButton, Typography } from '@mui/material'
import { Instagram } from 'iconoir-react'
import SectionTitle from './SectionTitle'
import { team } from '../data'
import { palette as c } from '../theme'

export default function Team() {
  return (
    <Box id="equipe" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        <SectionTitle kicker="Quem veste a camisa" title="Equipe HNA" />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: { xs: 1.5, sm: 3 } }}>
          {team.map((m) => {
            const dark = m.color !== c.gold
            return (
              <Box key={m.name} component="article" sx={{ '&:hover .hna-ph': { transform: 'scale(1.03)' } }}>
                <Box sx={{ overflow: 'hidden' }}>
                  <Box className="hna-ph" sx={{ aspectRatio: '3 / 4', bgcolor: m.color, color: dark ? '#fff' : c.black, display: 'grid', placeItems: 'center', position: 'relative', transition: 'transform .5s ease' }}>
                    <Typography aria-hidden sx={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: { xs: '3.5rem', sm: '7rem' }, opacity: 0.9 }}>{m.initials}</Typography>
                    <Box sx={{ position: 'absolute', inset: 16, border: '1px solid', borderColor: dark ? 'rgba(255,255,255,.25)' : 'rgba(18,18,18,.25)' }} />
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                  <Box>
                    <Typography variant="h6" component="h3">{m.name}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{m.role}</Typography>
                  </Box>
                  <IconButton aria-label={`Instagram de ${m.name}`}><Instagram /></IconButton>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
