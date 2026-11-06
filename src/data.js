import { palette as c } from './theme'

export const nav = [
  { label: 'Sol', href: '#produtos' },
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Lojas', href: '#contato' },
]

export const products = [
  { name: 'Mosh', tag: 'Novo', category: 'Hardcore', price: 489, shape: 'wayfarer', frame: c.black, lens: ['#2a2a2a', c.black], swatches: [c.black, c.navy, '#fff'] },
  { name: 'Swell', tag: 'Polarizado', category: 'Surf', price: 529, shape: 'square', frame: c.navy, lens: [c.sky, c.navy], swatches: [c.navy, c.black, c.sky] },
  { name: 'Riot 77', category: 'Punk', price: 459, shape: 'round', frame: c.black, lens: ['#5a4a1a', c.gold], swatches: [c.black, c.gold] },
  { name: 'Lineup', tag: 'Polarizado', category: 'Surf', price: 549, shape: 'shield', frame: '#ffffff', lens: [c.sky, '#0d2a4d'], swatches: ['#fff', c.black] },
  { name: 'Circle Pit', category: 'Hardcore', price: 499, shape: 'square', frame: c.black, lens: [c.navy, c.black], swatches: [c.black, c.navy] },
  { name: 'Offshore', category: 'Surf', price: 569, shape: 'aviator', frame: c.gold, lens: ['#3a5f8f', '#121212'], swatches: [c.gold, c.black] },
  { name: 'Três Acordes', category: 'Punk', price: 449, shape: 'wayfarer', frame: '#ffffff', lens: [c.black, '#333'], swatches: ['#fff', c.black, c.sky] },
  { name: 'Fundação 1912', tag: 'Edição limitada', category: 'Punk', price: 690, shape: 'round', frame: c.gold, lens: [c.black, '#222'], swatches: [c.gold], accent: c.gold },
]

export const collections = [
  {
    key: 'surf',
    title: 'Surf',
    kicker: 'Linha d’água',
    text: 'Lentes polarizadas que cortam o reflexo do mar às 6h da manhã. Armações leves, flutuantes e resistentes ao sal.',
    bg: c.navy,
    fg: '#fff',
    glasses: { shape: 'shield', frame: '#fff', lens: [c.sky, '#0d2a4d'] },
  },
  {
    key: 'hardcore',
    title: 'Hardcore',
    kicker: 'Linha de frente',
    text: 'Feitos para aguentar a roda. Acetato reforçado, dobradiças de mola e zero frescura — direto ao ponto, como um riff de 40 segundos.',
    bg: c.black,
    fg: '#fff',
    glasses: { shape: 'square', frame: '#fff', lens: ['#333', c.black] },
  },
  {
    key: 'punk',
    title: 'Punk Rock',
    kicker: 'Faça você mesmo',
    text: 'Formas clássicas, atitude torta. Três acordes, uma verdade e um par de óculos que já nasce com história.',
    bg: '#fff',
    fg: c.black,
    glasses: { shape: 'round', frame: c.black, lens: [c.gold, '#5a4a1a'], accent: c.gold },
  },
]

export const team = [
  { name: 'Rafa Nunes', role: 'Surf · Guarujá', initials: 'RN', color: c.navy },
  { name: 'Duda Ferraz', role: 'Vocal · Banda Maré Alta', initials: 'DF', color: c.black },
  { name: 'Teco Lima', role: 'Skate · Santos', initials: 'TL', color: c.sky },
  { name: 'Bia Coutinho', role: 'Fotografia · Estrada', initials: 'BC', color: c.gold },
]

export const perks = [
  { icon: 'DeliveryTruck', title: 'Frete grátis', text: 'Para todo o Brasil acima de R$ 399.' },
  { icon: 'SunLight', title: 'UV400', text: '100% de proteção UVA e UVB em todas as lentes.' },
  { icon: 'ShieldCheck', title: 'Garantia de 2 anos', text: 'Quebrou na roda? A gente resolve.' },
  { icon: 'Refresh', title: 'Troca em 30 dias', text: 'Não curtiu o caimento? Troca sem burocracia.' },
]

export const brl = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
