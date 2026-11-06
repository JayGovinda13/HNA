import { Box, Button, Container, Typography } from '@mui/material'
import { ArrowUpRight, SeaWaves, Flash, MusicDoubleNote } from 'iconoir-react'
import Glasses from './Glasses'
import SectionTitle from './SectionTitle'
import { collections } from '../data'
import { palette as c } from '../theme'

const icons = { surf: SeaWaves, hardcore: Flash, punk: MusicDoubleNote }

export default function Collections() {
  return (
    <Box id="colecoes" component="section" sx={{ pt: { xs: 10, md: 14 }, bgcolor: c.gray }}>
      <Container maxWidth="xl">
        <SectionTitle kicker="Três tribos, um olhar" title="Coleções" />
      </Container>
      {collections.map((col, i) => {
        const Icon = icons[col.key]
        const reverse = i % 2 === 1
        return (
          <Box key={col.key} sx={{ bgcolor: col.bg, color: col.fg, borderTop: col.bg === '#fff' ? `1px solid ${c.line}` : 'none' }}>
            <Container maxWidth="xl" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, minHeight: { md: 520 }, alignItems: 'center', gap: 4, py: { xs: 8, md: 0 } }}>
              <Box sx={{ order: { md: reverse ? 2 : 1 }, py: { md: 10 }, pr: { md: reverse ? 0 : 6 }, pl: { md: reverse ? 6 : 0 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, color: c.gold }}>
                  <Icon width={22} height={22} />
                  <Typography variant="overline">{String(i + 1).padStart(2, '0')} — {col.kicker}</Typography>
                </Box>
                <Typography variant="h2" component="h3" sx={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}>{col.title}</Typography>
                <Typography sx={{ mt: 3, maxWidth: 440, lineHeight: 1.7, opacity: 0.8 }}>{col.text}</Typography>
                <Button href="#produtos" endIcon={<ArrowUpRight />} variant="outlined"
                  sx={{ mt: 4, color: col.fg, borderColor: col.fg, '&:hover': { bgcolor: col.fg, color: col.bg, borderColor: col.fg } }}>
                  Explorar {col.title}
                </Button>
              </Box>
              <Box sx={{ order: { md: reverse ? 1 : 2 }, position: 'relative', display: 'grid', placeItems: 'center', minHeight: { xs: 220, md: 420 } }}>
                <Typography aria-hidden sx={{ position: 'absolute', fontFamily: '"Anton", Impact, sans-serif', fontSize: { xs: '9rem', md: '18rem' }, lineHeight: 1, opacity: 0.06, userSelect: 'none' }}>
                  {String(i + 1).padStart(2, '0')}
                </Typography>
                <Box sx={{ width: '90%', maxWidth: 520, transform: `rotate(${reverse ? 4 : -4}deg)`, transition: 'transform .5s', '&:hover': { transform: 'rotate(0deg) scale(1.04)' }, filter: 'drop-shadow(0 24px 24px rgba(0,0,0,.3))' }}>
                  <Glasses {...col.glasses} title={`Coleção ${col.title}`} />
                </Box>
              </Box>
            </Container>
          </Box>
        )
      })}
    </Box>
  )
}
