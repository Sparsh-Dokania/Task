'use client'

import { Moon, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useMounted } from '@/hooks/useMounted'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--text-secondary)] shadow-[0_18px_56px_-34px_var(--shadow-strong)] backdrop-blur-2xl transition-[background,border-color,box-shadow,transform,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:text-[var(--text-primary)] hover:shadow-[0_20px_64px_-34px_var(--shadow-strong)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-accent)]/35"
    >
      <span
        className="absolute inset-1 rounded-full bg-[var(--surface-subtle)] opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        aria-hidden="true"
      />
      <SunMedium
        className="absolute h-4.5 w-4.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0.72) rotate(-45deg)' : 'scale(1) rotate(0deg)'
        }}
      />
      <Moon
        className="absolute h-4.5 w-4.5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1) rotate(0deg)' : 'scale(0.72) rotate(45deg)'
        }}
      />
    </button>
  )
}
