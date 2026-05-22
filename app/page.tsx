'use client'

import { useState } from 'react'
import { CreativeHero } from '@/components/creative/CreativeHero'
import { InterviewHero } from '@/components/interview/InterviewHero'
import { HeroControls } from '@/components/layout/HeroControls'
import type { HeroMode } from '@/components/ui/ModeToggle'

export default function Home() {
  const [mode, setMode] = useState<HeroMode>('reference')

  return (
    <>
      <HeroControls mode={mode} onModeChange={setMode} />
      {mode === 'reference' ? <InterviewHero /> : <CreativeHero />}
    </>
  )
}
