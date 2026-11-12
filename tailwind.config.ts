import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background:      'var(--background)',
        surface:         'var(--surface)',
        elevated:        'var(--elevated)',
        border:          'var(--border)',
        'border-hover':  'var(--border-hover)',
        'text-primary':  'var(--text-primary)',
        'text-secondary':'var(--text-secondary)',
        'text-muted':    'var(--text-muted)',
        primary:         'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        secondary:       'var(--secondary)',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', 'monospace'],
      },
      animation: {
        'fade-in':    'fade-in    0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-up':   'slide-up   0.6s cubic-bezier(0.22,1,0.36,1) forwards',
        'slide-down': 'slide-down 0.4s cubic-bezier(0.22,1,0.36,1) forwards',
        'scale-in':   'scale-in   0.4s cubic-bezier(0.22,1,0.36,1) forwards',
        marquee:      'marquee 60s linear infinite',
      },
      keyframes: {
        'fade-in':    { '0%': { opacity: '0' },                                    '100%': { opacity: '1' } },
        'slide-up':   { '0%': { opacity: '0', transform: 'translateY(16px)' },     '100%': { opacity: '1', transform: 'translateY(0)' } },
        'slide-down': { '0%': { opacity: '0', transform: 'translateY(-16px)' },    '100%': { opacity: '1', transform: 'translateY(0)' } },
        'scale-in':   { '0%': { opacity: '0', transform: 'scale(0.95)' },          '100%': { opacity: '1', transform: 'scale(1)' } },
        marquee:      { '0%': { transform: 'translateX(0)' },                      '100%': { transform: 'translateX(-50%)' } },
      },
      maxWidth: {
        prose: '75ch',
      },
    },
  },
  plugins: [],
}

export default config
