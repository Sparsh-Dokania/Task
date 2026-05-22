'use client'

import { cn } from '@/lib/utils'

export type HeroMode = 'reference' | 'creative'

type ModeToggleProps = {
  mode: HeroMode
  onChange: (mode: HeroMode) => void
}

const options: Array<{ value: HeroMode; label: string }> = [
  { value: 'reference', label: 'Reference' },
  { value: 'creative', label: 'Creative' }
]

export function ModeToggle({ mode, onChange }: ModeToggleProps) {
  const activeIndex = mode === 'reference' ? 0 : 1

  return (
    <div className="relative grid h-11 w-[212px] grid-cols-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] p-1 shadow-[0_18px_56px_-34px_var(--shadow-strong)] backdrop-blur-2xl">
      <span
        className="absolute left-1 top-1 h-9 w-[100px] rounded-full bg-[var(--toggle-thumb)] shadow-[0_12px_28px_-18px_var(--shadow-strong)] transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${activeIndex * 104}px)` }}
        aria-hidden="true"
      />
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={cn(
            'relative z-10 rounded-full text-sm font-semibold tracking-normal transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-accent)]/35',
            mode === option.value ? 'text-[var(--toggle-thumb-text)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
          )}
          aria-pressed={mode === option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
