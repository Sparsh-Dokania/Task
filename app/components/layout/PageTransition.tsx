'use client'

import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'
import { type ReactNode, useEffect, useRef } from 'react'
import { motion } from '@/lib/motion'

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const context = gsap.context(() => {
      gsap.fromTo(
        container,
        { autoAlpha: 0, y: 8, filter: 'blur(8px)' },
        { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.72, ease: motion.ease }
      )
    }, container)

    return () => context.revert()
  }, [pathname])

  return (
    <div key={pathname} ref={containerRef}>
      {children}
    </div>
  )
}
