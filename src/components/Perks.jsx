import { Box, Container, Typography } from '@mui/material'
import { DeliveryTruck, SunLight, ShieldCheck, Refresh } from 'iconoir-react'

const Icons = { DeliveryTruck, SunLight, ShieldCheck, Refresh }
import { perks } from '../data'
import { palette as c } from '../theme'

export default function Perks() {
  return (
    <Box component="section" aria-label="Vantagens" sx={{ borderBlock: `1px solid ${c.line}` }}>
      <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' } }}>
        {perks.map((p) => {
          const Icon = Icons[p.icon]
          return (
            <Box key={p.title} sx={{ display: 'flex', gap: 2, py: 4, px: { sm: 2 } }}>
              <Box sx={{ color: c.navy, flexShrink: 0 }}><Icon width={28} height={28} /></Box>
              <Box>
                <Typography variant="h6" component="h3" sx={{ fontSize: '0.82rem' }}>{p.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>{p.text}</Typography>
              </Box>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}
