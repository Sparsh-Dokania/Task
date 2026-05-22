'use client'

import { ModeToggle, type HeroMode } from '@/components/ui/ModeToggle'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

type HeroControlsProps = {
  mode: HeroMode
  onModeChange: (mode: HeroMode) => void
}

export function HeroControls({ mode, onModeChange }: HeroControlsProps) {
  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 sm:right-6 sm:top-6">
      <ModeToggle mode={mode} onChange={onModeChange} />
      <ThemeToggle />
    </div>
  )
}
