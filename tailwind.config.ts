import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        premium: '0 22px 70px -34px rgba(15, 23, 42, 0.38)',
        'premium-dark': '0 24px 78px -34px rgba(0, 0, 0, 0.72)'
      }
    }
  },
  plugins: []
}

export default config
