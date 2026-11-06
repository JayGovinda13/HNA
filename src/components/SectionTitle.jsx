import { Box, Stack, Typography } from '@mui/material'
import { palette as c } from '../theme'

export default function SectionTitle({ kicker, title, action, light }) {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ justifyContent: 'space-between', alignItems: { md: 'flex-end' }, mb: { xs: 5, md: 7 } }}>
      <Box>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', mb: 2 }}>
          <Box sx={{ width: 28, height: 2, bgcolor: c.gold }} />
          <Typography variant="overline" sx={{ color: light ? 'rgba(255,255,255,.7)' : 'text.secondary' }}>{kicker}</Typography>
        </Stack>
        <Typography variant="h2">{title}</Typography>
      </Box>
      {action}
    </Stack>
  )
}
