import { Box, Typography } from '@mui/material'
import { palette as c } from '../theme'

const words = ['Surf', 'Hardcore', 'Punk Rock', 'UV400', 'Polarizado', 'Feito na rua']

export default function Marquee({ bg = c.black, fg = '#fff' }) {
  const row = [...words, ...words]
  return (
    <Box aria-hidden sx={{ bgcolor: bg, color: fg, overflow: 'hidden', py: 2, borderBlock: `1px solid ${c.black}` }}>
      <Box sx={{ display: 'flex', width: 'max-content', animation: 'hna-marquee 28s linear infinite' }}>
        {[0, 1].map((k) => (
          <Box key={k} sx={{ display: 'flex' }}>
            {row.map((w, i) => (
              <Typography key={i} component="span" sx={{ fontFamily: '"Anton", Impact, sans-serif', fontSize: { xs: '1.6rem', md: '2.4rem' }, textTransform: 'uppercase', px: 3, display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
                {w}<Box component="span" sx={{ color: c.gold, fontSize: '0.8em' }}>✦</Box>
              </Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
