import { useState } from 'react'
import { Alert, Box, Button, Container, InputBase, Snackbar, Typography } from '@mui/material'
import { Mail, ArrowRight } from 'iconoir-react'
import { palette as c } from '../theme'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [ok, setOk] = useState(false)
  const valid = /^\S+@\S+\.\S+$/.test(email)

  const submit = (e) => {
    e.preventDefault()
    if (!valid) return
    setOk(true)
    setEmail('')
  }

  return (
    <Box component="section" sx={{ bgcolor: c.sky, color: '#fff', py: { xs: 10, md: 12 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="overline" sx={{ color: c.black }}>Lista do Pit</Typography>
        <Typography variant="h2" sx={{ mt: 2 }}>Entre pro bonde</Typography>
        <Typography sx={{ mt: 2, opacity: 0.9, maxWidth: 520, mx: 'auto' }}>
          Lançamentos antes de todo mundo, previsão de swell, agenda de shows e 10% off na primeira compra.
        </Typography>
        <Box component="form" onSubmit={submit} noValidate sx={{ mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, maxWidth: 560, mx: 'auto', bgcolor: '#fff', p: 0.75, gap: 0.75 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, px: 2, color: c.black, gap: 1.5 }}>
            <Mail />
            <InputBase type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="seu@email.com"
              inputProps={{ 'aria-label': 'E-mail' }} sx={{ flex: 1, py: 1.5, fontWeight: 500 }} />
          </Box>
          <Button type="submit" variant="contained" disabled={!valid} endIcon={<ArrowRight />}
            sx={{ '&.Mui-disabled': { bgcolor: c.black, color: 'rgba(255,255,255,.5)' } }}>
            Inscrever
          </Button>
        </Box>
      </Container>
      <Snackbar open={ok} autoHideDuration={4000} onClose={() => setOk(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setOk(false)} severity="success" variant="filled" sx={{ borderRadius: 0, bgcolor: c.black }}>
          Valeu! Seu cupom chega no e-mail.
        </Alert>
      </Snackbar>
    </Box>
  )
}
