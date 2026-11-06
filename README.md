# HNA Eyewear — site institucional

Site institucional da HNA, marca de óculos ligada ao surf, ao hardcore e ao punk rock.

**Stack:** Vite + React · MUI · ícones [Iconoir](https://iconoir.com) · fontes Anton + Inter.

## Paleta

| Cor | Hex | Uso |
| --- | --- | --- |
| Branco Puro | `#FFFFFF` | Fundo principal / leitura |
| Preto Carvão | `#121212` | Textos e fundos escuros |
| Azul Marinho / Royal | `#1A4B84` | Hero, coleção Surf, destaques |
| Azul Celeste | `#3B82F6` | Links, interações, newsletter |
| Dourado Fundação | `#D4AF37` | Detalhes históricos / acentos |

Definida em `src/theme.js` (`palette`).

## Rodando

```bash
npm install
npm run dev
```

Build de produção: `npm run build` (saída em `dist/`).

## Estrutura

- `src/theme.js` — tema MUI e paleta
- `src/data.js` — produtos, coleções, equipe e vantagens (edite aqui o conteúdo)
- `src/components/` — seções (Header, Hero, Marquee, Products, Collections, About, Team, Perks, Newsletter, Footer)
- `src/components/Glasses.jsx` — ilustração vetorial de óculos usada no lugar de fotos; troque por imagens reais do produto quando houver
