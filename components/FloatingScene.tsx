'use client'

import { gsap } from 'gsap'
import { BriefcaseBusiness, CalendarClock, FileCheck2, FolderKanban, Scale, SearchCheck } from 'lucide-react'
import { useEffect, useRef } from 'react'
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
      x: gsap.quickTo(card, 'x', { duration: 0.65, ease: 'power3.out' }),
      y: gsap.quickTo(card, 'y', { duration: 0.65, ease: 'power3.out' })
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
      <div className="absolute left-1/2 top-1/2 h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/58 blur-3xl dark:bg-white/[0.055]" />
      <div className="absolute left-[18%] top-[12%] h-[19rem] w-[19rem] rounded-full border border-slate-900/[0.035] bg-gradient-to-br from-white/64 to-white/20 shadow-[0_34px_120px_-72px_rgba(43,57,86,0.7)] backdrop-blur-xl dark:border-white/[0.055] dark:from-white/[0.08] dark:to-white/[0.02]" />

      <FloatingCard
        label="Case Intake"
        icon={<BriefcaseBusiness className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="linear-gradient(135deg, rgba(255,255,255,0.84), rgba(245,248,252,0.68))"
        textColor="rgb(35 44 59)"
        rotation={-7}
        shadowColor="rgba(72, 91, 124, 0.55)"
        size="lg"
        floatSpeed={5.6}
        depth={1.2}
        className="left-[2%] top-[13%] scale-[0.78] sm:left-[1%] sm:top-[15%] sm:scale-100 lg:left-[3%] lg:top-[18%]"
      />
      <FloatingCard
        label="Matter Timeline"
        icon={<CalendarClock className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="linear-gradient(135deg, rgba(235,243,255,0.88), rgba(255,255,255,0.72))"
        textColor="rgb(38 70 117)"
        rotation={5}
        shadowColor="rgba(74, 112, 179, 0.5)"
        size="md"
        floatSpeed={6.3}
        depth={0.92}
        className="right-[3%] top-[8%] scale-[0.77] sm:right-[6%] sm:top-[10%] sm:scale-100 lg:right-[8%] lg:top-[9%]"
      />
      <FloatingCard
        label="Document Review"
        icon={<SearchCheck className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="linear-gradient(135deg, rgba(245,240,228,0.9), rgba(255,255,255,0.74))"
        textColor="rgb(96 74 45)"
        rotation={-3}
        shadowColor="rgba(153, 115, 67, 0.48)"
        size="lg"
        floatSpeed={5.9}
        depth={1.45}
        className="left-[18%] top-[37%] scale-[0.82] sm:left-[16%] sm:top-[38%] sm:scale-100 lg:left-[18%]"
      />
      <FloatingCard
        label="Contract Tasks"
        icon={<FolderKanban className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="linear-gradient(135deg, rgba(239,248,242,0.9), rgba(255,255,255,0.72))"
        textColor="rgb(46 94 71)"
        rotation={7}
        shadowColor="rgba(72, 139, 99, 0.45)"
        size="md"
        floatSpeed={6.7}
        depth={0.8}
        className="bottom-[22%] right-[0%] scale-[0.76] sm:bottom-[24%] sm:right-[8%] sm:scale-100 lg:right-[9%]"
      />
      <FloatingCard
        label="Compliance"
        icon={<Scale className="h-4 w-4" strokeWidth={1.9} />}
        bgColor="linear-gradient(135deg, rgba(250,244,255,0.9), rgba(255,255,255,0.72))"
        textColor="rgb(82 63 111)"
        rotation={-8}
        shadowColor="rgba(123, 92, 164, 0.42)"
        size="sm"
        floatSpeed={6.1}
        depth={1.05}
        className="bottom-[10%] left-[4%] scale-[0.78] sm:bottom-[11%] sm:left-[9%] sm:scale-100 lg:left-[10%]"
      />
      <FloatingCard
        label="Signed"
        icon={<FileCheck2 className="h-4 w-4" strokeWidth={2} />}
        bgColor="linear-gradient(135deg, rgba(255,255,255,0.92), rgba(240,244,249,0.72))"
        textColor="rgb(31 41 55)"
        rotation={4}
        shadowColor="rgba(56, 71, 95, 0.44)"
        size="sm"
        floatSpeed={5.4}
        depth={1.32}
        className="bottom-[4%] right-[21%] scale-[0.7] sm:bottom-[6%] sm:right-[28%] sm:scale-100"
      />
      <MessageCard className="right-[7%] top-[53%] scale-[0.78] sm:right-[12%] sm:top-[52%] sm:scale-100 lg:right-[17%]" />
    </div>
  )
}
