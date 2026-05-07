import type { Config } from 'tailwindcss'

// ============================================================
// Dra. Lígia Cordeiro — Design Tokens
// Paleta e tipografia extraídas da identidade visual da marca
// ============================================================

export default {
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.vue',
    './layouts/**/*.vue',
  ],

  theme: {
    extend: {
      // ----------------------------------------------------------
      // PALETA DE CORES
      // ----------------------------------------------------------
      colors: {
        // Azul Navy — cor primária de autoridade e sofisticação
        // Extraída do fundo do quadro e do copo escuro
        navy: {
          DEFAULT: '#1C2B3A',   // Navy principal
          light:   '#263545',   // Navy levemente mais claro (hover/variações)
          dark:    '#111E2B',   // Navy profundo (sombras, fundos escuros)
        },

        // Dourado — cor de prestígio e acento da marca
        // Extraído do ícone da logo e detalhes decorativos
        gold: {
          DEFAULT: '#C4A456',   // Dourado principal
          light:   '#D4B870',   // Dourado claro (hover, brilho)
          dark:    '#A8883C',   // Dourado escuro (profundidade)
          muted:   '#B09A5E',   // Dourado acinzentado (textos sutis)
        },

        // Creme/Off-white — fundo sofisticado dos cartões
        // Tom levemente quente, com sensação de mármore
        cream: {
          DEFAULT: '#F7F4EF',   // Creme principal (fundo cards)
          warm:    '#F0EBE3',   // Creme mais quente (seções alternadas)
          marble:  '#FAFAFA',   // Branco mármore (backgrounds claros)
        },

        // Bege Areia — tom neutro de fundo
        // Extraído do background do primeiro print
        sand: {
          DEFAULT: '#D0C3AD',   // Areia principal
          light:   '#E2D9C8',   // Areia clara
          dark:    '#B8A990',   // Areia escura
        },

        // Neutros para texto e elementos UI
        text: {
          primary:   '#1C2B3A',   // Texto principal (navy)
          secondary: '#5C6670',   // Texto secundário (cinza suave)
          muted:     '#9AA2AA',   // Texto apagado (placeholders)
          light:     '#F7F4EF',   // Texto sobre fundos escuros
        },
      },

      // ----------------------------------------------------------
      // TIPOGRAFIA
      // ----------------------------------------------------------
      fontFamily: {
        // Fonte script/caligráfica — usada no nome "Dra. Lígia Cordeiro"
        // Great Vibes é a correspondência mais próxima da caligrafia da logo
        script: ['"Great Vibes"', 'cursive'],

        // Fonte serifada espaçada — usada no subtítulo
        // "BIOMÉDICA · DERMATICISTA & COSMETÓLOGA"
        // Cormorant SC captura o refinamento da fonte nos prints
        heading: ['"Cormorant SC"', '"Cormorant"', 'serif'],

        // Fonte de corpo — textos descritivos, parágrafos, UI
        // Leve, moderna e legível
        body: ['"Cormorant"', 'Georgia', 'serif'],

        // Fonte sans-serif utilitária — botões, labels, navegação
        ui: ['"Jost"', '"Inter"', 'sans-serif'],
      },

      fontSize: {
        // Escala tipográfica refinada
        'xs':   ['0.75rem',  { lineHeight: '1.5' }],
        'sm':   ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem',     { lineHeight: '1.7' }],
        'lg':   ['1.125rem', { lineHeight: '1.7' }],
        'xl':   ['1.25rem',  { lineHeight: '1.6' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.5' }],
        '3xl':  ['1.875rem', { lineHeight: '1.4' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.3' }],
        '5xl':  ['3rem',     { lineHeight: '1.2' }],
        '6xl':  ['3.75rem',  { lineHeight: '1.15' }],
        '7xl':  ['4.5rem',   { lineHeight: '1.1' }],
        '8xl':  ['6rem',     { lineHeight: '1.05' }],
        '9xl':  ['8rem',     { lineHeight: '1' }],

        // Tamanhos especiais para o nome em script
        'script-md': ['2.5rem',  { lineHeight: '1.3' }],
        'script-lg': ['3.5rem',  { lineHeight: '1.2' }],
        'script-xl': ['5rem',    { lineHeight: '1.1' }],
        'script-2xl':['7rem',    { lineHeight: '1.05' }],
      },

      letterSpacing: {
        // Espaçamento de letras — o subtítulo tem tracking bem aberto
        'ultrawide': '0.4em',
        'widest':    '0.25em',
        'wider':     '0.15em',
        'wide':      '0.1em',
        'normal':    '0em',
        'tight':     '-0.01em',
      },

      // ----------------------------------------------------------
      // GRADIENTES
      // ----------------------------------------------------------
      backgroundImage: {
        // Gradiente dourado — para elementos de destaque
        'gold-gradient': 'linear-gradient(135deg, #C4A456 0%, #D4B870 40%, #A8883C 100%)',
        // Gradiente escuro — para fundos premium
        'navy-gradient': 'linear-gradient(160deg, #1C2B3A 0%, #111E2B 100%)',
        // Gradiente suave — para seções de transição
        'cream-gradient': 'linear-gradient(180deg, #FAFAFA 0%, #F0EBE3 100%)',
      },

      // ----------------------------------------------------------
      // SOMBRAS PREMIUM
      // ----------------------------------------------------------
      boxShadow: {
        'gold-sm':  '0 2px 12px rgba(196, 164, 86, 0.2)',
        'gold-md':  '0 4px 24px rgba(196, 164, 86, 0.3)',
        'gold-lg':  '0 8px 40px rgba(196, 164, 86, 0.35)',
        'navy-sm':  '0 2px 12px rgba(28, 43, 58, 0.15)',
        'navy-md':  '0 8px 32px rgba(28, 43, 58, 0.25)',
        'soft':     '0 2px 20px rgba(0, 0, 0, 0.06)',
        'card':     '0 4px 32px rgba(28, 43, 58, 0.08)',
        'elevated': '0 12px 48px rgba(28, 43, 58, 0.15)',
      },

      // ----------------------------------------------------------
      // BORDER RADIUS
      // ----------------------------------------------------------
      borderRadius: {
        'none': '0',
        'sm':   '4px',
        'DEFAULT': '8px',
        'md':   '12px',
        'lg':   '16px',
        'xl':   '24px',
        '2xl':  '32px',
        'full': '9999px',
      },

      // ----------------------------------------------------------
      // TRANSIÇÕES SUAVES
      // ----------------------------------------------------------
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '500': '500ms',
        '700': '700ms',
      },

      transitionTimingFunction: {
        'elegant': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smooth':  'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },

  plugins: [],
} satisfies Config
