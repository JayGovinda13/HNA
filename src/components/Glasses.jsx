import { useId } from 'react'

const LENS = {
  wayfarer:
    'M20,28 L132,24 Q140,24 138,38 L130,80 Q126,96 108,96 L46,96 Q28,96 24,80 L14,40 Q12,28 20,28 Z',
  round: 'M80,20 A40,40 0 1,1 79.9,20 Z',
  square: 'M36,24 L122,24 Q136,24 136,38 L136,82 Q136,96 122,96 L36,96 Q22,96 22,82 L22,38 Q22,24 36,24 Z',
  aviator: 'M22,34 Q24,22 72,22 Q134,22 136,40 Q138,70 112,92 Q92,106 64,100 Q30,92 22,60 Z',
  shield: 'M14,34 Q16,22 60,22 L140,26 L140,74 Q138,96 104,98 L52,98 Q20,96 14,66 Z',
}

/**
 * Ilustração vetorial de óculos — usada como "foto" de produto.
 * frame: cor da armação · lens: [cor topo, cor base] da lente
 */
export default function Glasses({ shape = 'wayfarer', frame = '#121212', lens = ['#1A4B84', '#121212'], accent, width = '100%', style, title }) {
  const id = useId().replace(/:/g, '')
  const d = LENS[shape] ?? LENS.wayfarer
  const shieldMode = shape === 'shield'

  return (
    <svg viewBox="0 0 300 124" width={width} style={style} role="img" aria-label={title ?? `Óculos modelo ${shape}`}>
      <defs>
        <linearGradient id={`l${id}`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor={lens[0]} />
          <stop offset="1" stopColor={lens[1]} />
        </linearGradient>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* hastes */}
      <path d="M16,36 L2,30" stroke={frame} strokeWidth="7" strokeLinecap="round" />
      <path d="M284,36 L298,30" stroke={frame} strokeWidth="7" strokeLinecap="round" />

      {shieldMode ? (
        <>
          <path d="M14,34 Q16,22 60,22 L240,22 Q284,22 286,34 L286,66 Q280,96 248,98 L196,98 Q160,96 150,72 Q140,96 104,98 L52,98 Q20,96 14,66 Z" fill={`url(#l${id})`} stroke={frame} strokeWidth="7" strokeLinejoin="round" />
          <path d="M30,32 L120,30 L60,90 Z" fill={`url(#g${id})`} />
        </>
      ) : (
        <>
          {[0, 1].map((i) => (
            <g key={i} transform={i ? 'translate(300,0) scale(-1,1)' : undefined}>
              <path d={d} fill={`url(#l${id})`} stroke={frame} strokeWidth="8" strokeLinejoin="round" />
              <path d={d} fill={`url(#g${id})`} transform="translate(8,6) scale(0.9)" opacity="0.7" style={{ clipPath: 'inset(0 40% 40% 0)' }} />
            </g>
          ))}
          {/* ponte */}
          <path d={shape === 'aviator' ? 'M134,34 Q150,26 166,34 M136,30 L164,30' : 'M136,42 Q150,30 164,42'} stroke={frame} strokeWidth="7" fill="none" strokeLinecap="round" />
        </>
      )}

      {/* rebite / detalhe dourado */}
      {accent && (
        <>
          <circle cx="24" cy="34" r="3.2" fill={accent} />
          <circle cx="276" cy="34" r="3.2" fill={accent} />
        </>
      )}
    </svg>
  )
}
