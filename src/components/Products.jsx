import { useState } from 'react'
import { Box, Button, Chip, Container, IconButton, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import { Heart, Plus, ArrowRight } from 'iconoir-react'
import { Heart as HeartSolid } from 'iconoir-react/solid'
import Glasses from './Glasses'
import SectionTitle from './SectionTitle'
import { products, brl } from '../data'
import { palette as c } from '../theme'

const filters = ['Todos', 'Surf', 'Hardcore', 'Punk']

function ProductCard({ p, onAdd }) {
  const [fav, setFav] = useState(false)
  return (
    <Box component="article" sx={{ position: 'relative', '&:hover .hna-add': { opacity: 1, transform: 'translateY(0)' }, '&:hover .hna-img': { transform: 'scale(1.06) rotate(-2deg)' } }}>
      <Box sx={{ position: 'relative', bgcolor: c.gray, aspectRatio: '4 / 5', display: 'grid', placeItems: 'center', overflow: 'hidden', px: 3 }}>
        {p.tag && (
          <Chip label={p.tag} size="small" sx={{ position: 'absolute', top: 12, left: 12, bgcolor: p.accent ? c.gold : c.black, color: p.accent ? c.black : '#fff' }} />
        )}
        <IconButton aria-label={fav ? 'Remover dos favoritos' : 'Favoritar'} onClick={() => setFav(!fav)} sx={{ position: 'absolute', top: 6, right: 6, color: fav ? c.sky : 'text.primary' }}>
          {fav ? <HeartSolid /> : <Heart />}
        </IconButton>
        <Box className="hna-img" sx={{ width: '100%', transition: 'transform .5s cubic-bezier(.2,.8,.2,1)', filter: 'drop-shadow(0 14px 14px rgba(0,0,0,.18))' }}>
          <Glasses shape={p.shape} frame={p.frame} lens={p.lens} accent={p.accent} title={`Óculos ${p.name}`} />
        </Box>
        <Button className="hna-add" onClick={onAdd} fullWidth startIcon={<Plus />} variant="contained"
          sx={{ py: { xs: 1, md: 1.75 }, fontSize: { xs: '0.66rem', md: '0.78rem' }, position: 'absolute', left: 0, bottom: 0, opacity: { xs: 1, md: 0 }, transform: { md: 'translateY(100%)' }, transition: 'all .3s ease', '&:hover': { bgcolor: c.navy } }}>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>Adicionar à sacola</Box>
          <Box component="span" sx={{ display: { sm: 'none' } }}>Adicionar</Box>
        </Button>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ justifyContent: 'space-between', alignItems: { sm: 'flex-start' }, mt: 2, gap: { sm: 1 } }}>
        <Box>
          <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.62rem' }}>{p.category}</Typography>
          <Typography variant="h6" component="h3">{p.name}</Typography>
        </Box>
        <Typography sx={{ fontWeight: 700, whiteSpace: 'nowrap', pt: { sm: 2.4 } }}>{brl(p.price)}</Typography>
      </Stack>
      <Stack direction="row" spacing={0.75} sx={{ mt: 1 }}>
        {p.swatches.map((s) => (
          <Box key={s} sx={{ width: 14, height: 14, borderRadius: '50%', bgcolor: s, border: '1px solid', borderColor: 'divider' }} />
        ))}
      </Stack>
    </Box>
  )
}

export default function Products({ onAdd }) {
  const [filter, setFilter] = useState('Todos')
  const list = filter === 'Todos' ? products : products.filter((p) => p.category === filter)

  return (
    <Box id="produtos" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl">
        <SectionTitle kicker="Os mais vendidos" title="Óculos de sol"
          action={
            <ToggleButtonGroup exclusive value={filter} onChange={(_, v) => v && setFilter(v)} aria-label="Filtrar por coleção"
              sx={{ flexWrap: 'wrap', '& .MuiToggleButton-root': { borderRadius: 0, px: 2.5, py: 1, fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.7rem', borderColor: c.black, color: c.black, '&.Mui-selected': { bgcolor: c.black, color: '#fff', '&:hover': { bgcolor: c.black } } } }}>
              {filters.map((f) => <ToggleButton key={f} value={f}>{f}</ToggleButton>)}
            </ToggleButtonGroup>
          }
        />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, columnGap: { xs: 1.5, sm: 3 }, rowGap: 6 }}>
          {list.map((p) => <ProductCard key={p.name} p={p} onAdd={() => onAdd(p)} />)}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Button variant="outlined" endIcon={<ArrowRight />}>Ver todos os modelos</Button>
        </Box>
      </Container>
    </Box>
  )
}
