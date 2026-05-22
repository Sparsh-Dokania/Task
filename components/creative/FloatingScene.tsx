'use client'

import { gsap } from 'gsap'
import { BriefcaseBusiness, CalendarClock, FileCheck2, FolderKanban, Scale, SearchCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion } from '@/lib/motion'
import { FloatingCard } from './FloatingCard'
import { MessageCard } from './MessageCard'

export function FloatingScene() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const cards = gsap.utils.toArray<HTMLElement>(scene.querySelectorAll('.scene-card'))
    const quickSetters = cards.map((card) => ({
      card,
      x: gsap.quickTo(card, 'x', { duration: motion.parallaxDuration, ease: motion.ease }),
      y: gsap.quickTo(card, 'y', { duration: motion.parallaxDuration, ease: motion.ease })
    }))

    const animateParallax = () => {
      quickSetters.forEach(({ card, x, y }) => {
        const depth = Number(card.dataset.depth ?? 1)
        x(targetRef.current.x * depth * 10)
        y(targetRef.current.y * depth * 8)
      })
      rafRef.current = null
    }

    const onPointerMove = (event: PointerEvent) => {
      const rect = scene.getBoundingClientRect()
      targetRef.current = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5
      }

      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(animateParallax)
      }
    }

    const onPointerLeave = () => {
      targetRef.current = { x: 0, y: 0 }
      if (rafRef.current === null) {
        rafRef.current = window.requestAnimationFrame(animateParallax)
      }
    }

    scene.addEventListener('pointermove', onPointerMove)
    scene.addEventListener('pointerleave', onPointerLeave)

    return () => {
      scene.removeEventListener('pointermove', onPointerMove)
      scene.removeEventListener('pointerleave', onPointerLeave)
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current)
      quickSetters.forEach(({ x, y }) => {
        x(0)
        y(0)
      })
    }
  }, [])

  return (
    <div
      ref={sceneRef}
      className="relative mx-auto h-[27rem] w-full max-w-[38rem] transform-gpu overflow-visible sm:h-[31rem] lg:h-[35rem] lg:max-w-none"
      aria-label="Legal workflow preview"
    >
      <div className="absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--creative-orb)] blur-3xl" />
      <div className="absolute left-[18%] top-[12%] h-[19rem] w-[19rem] rounded-full border border-[var(--border-subtle)] bg-[var(--creative-panel)] shadow-[0_34px_120px_-72px_var(--shadow-strong)] backdrop-blur-xl" />

      <FloatingCard
        label="Case Intake"
        icon={<BriefcaseBusiness className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="var(--creative-card-neutral)"
        textColor="var(--creative-text-neutral)"
        rotation={-7}
        shadowColor="var(--shadow-strong)"
        size="lg"
        floatSpeed={5.6}
        depth={1.2}
        className="left-[2%] top-[13%] scale-[0.78] sm:left-[1%] sm:top-[15%] sm:scale-100 lg:left-[3%] lg:top-[18%]"
      />
      <FloatingCard
        label="Matter Timeline"
        icon={<CalendarClock className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="var(--creative-card-blue)"
        textColor="var(--creative-text-blue)"
        rotation={5}
        shadowColor="var(--shadow-strong)"
        size="md"
        floatSpeed={6.3}
        depth={0.92}
        className="right-[3%] top-[8%] scale-[0.77] sm:right-[6%] sm:top-[10%] sm:scale-100 lg:right-[8%] lg:top-[9%]"
      />
      <FloatingCard
        label="Document Review"
        icon={<SearchCheck className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="var(--creative-card-warm)"
        textColor="var(--creative-text-warm)"
        rotation={-3}
        shadowColor="var(--shadow-strong)"
        size="lg"
        floatSpeed={5.9}
        depth={1.45}
        className="left-[18%] top-[37%] scale-[0.82] sm:left-[16%] sm:top-[38%] sm:scale-100 lg:left-[18%]"
      />
      <FloatingCard
        label="Contract Tasks"
        icon={<FolderKanban className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="var(--creative-card-green)"
        textColor="var(--creative-text-green)"
        rotation={7}
        shadowColor="var(--shadow-strong)"
        size="md"
        floatSpeed={6.7}
        depth={0.8}
        className="bottom-[22%] right-[0%] scale-[0.76] sm:bottom-[24%] sm:right-[8%] sm:scale-100 lg:right-[9%]"
      />
      <FloatingCard
        label="Compliance"
        icon={<Scale className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="var(--creative-card-violet)"
        textColor="var(--creative-text-violet)"
        rotation={-8}
        shadowColor="var(--shadow-strong)"
        size="sm"
        floatSpeed={6.1}
        depth={1.05}
        className="bottom-[10%] left-[4%] scale-[0.78] sm:bottom-[11%] sm:left-[9%] sm:scale-100 lg:left-[10%]"
      />
      <FloatingCard
        label="Signed"
        icon={<FileCheck2 className="h-4 w-4" strokeWidth={2} />}
        bgColor="var(--creative-card-neutral)"
        textColor="var(--creative-text-neutral)"
        rotation={4}
        shadowColor="var(--shadow-strong)"
        size="sm"
        floatSpeed={5.4}
        depth={1.32}
        className="bottom-[4%] right-[21%] scale-[0.7] sm:bottom-[6%] sm:right-[28%] sm:scale-100"
      />
      <MessageCard className="right-[7%] top-[53%] scale-[0.78] sm:right-[12%] sm:top-[52%] sm:scale-100 lg:right-[17%]" />
    </div>
  )
}
