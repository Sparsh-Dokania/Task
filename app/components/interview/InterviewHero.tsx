'use client'

import { gsap } from 'gsap'
import { CreditCard, FileText, FolderOpen, ListChecks, Scale } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion } from '@/lib/motion'
import { BackgroundBlobs } from './BackgroundBlobs'
import { FloatingCard } from './FloatingCard'
import { MessageCard } from './MessageCard'

export function InterviewHero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const listenerCleanups: Array<() => void> = []

    const context = gsap.context(() => {
      gsap.set(['.reference-heading', '.reference-copy'], {
        y: 22,
        opacity: 0,
        filter: 'blur(8px)'
      })
      gsap.set('.reference-card', {
        y: 28,
        opacity: 0,
        filter: 'blur(12px)'
      })

      const timeline = gsap.timeline({ defaults: { ease: motion.ease } })

      timeline
        .to('.reference-blobs', { opacity: 1, duration: 0.85 })
        .to('.reference-heading', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.82 }, '-=0.42')
        .to('.reference-copy', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7 }, '-=0.5')
        .to(
          '.reference-card',
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: motion.revealDuration,
            stagger: motion.stagger
          },
          '-=0.52'
        )

      gsap.to('.float-slow', {
        y: -7,
        duration: motion.floatSlow,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      gsap.to('.float-mid', {
        y: -6,
        duration: motion.floatMid,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      root.querySelectorAll<HTMLElement>('.reference-card').forEach((card) => {
        const handleEnter = () => {
          gsap.to(card, { y: '-=3', scale: 1.012, duration: motion.hoverIn, ease: motion.ease })
        }
        const handleLeave = () => {
          gsap.to(card, { y: 0, scale: 1, duration: motion.hoverOut, ease: motion.ease })
        }

        card.addEventListener('pointerenter', handleEnter)
        card.addEventListener('pointerleave', handleLeave)
        listenerCleanups.push(() => {
          card.removeEventListener('pointerenter', handleEnter)
          card.removeEventListener('pointerleave', handleLeave)
        })
      })
    }, root)

    return () => {
      listenerCleanups.forEach((cleanup) => cleanup())
      context.revert()
    }
  }, [])

  const largeIconClass = 'h-12 w-12 lg:h-14 lg:w-14'
  const smallIconClass = 'h-6 w-6'

  return (
    <main
      ref={rootRef}
      className="relative min-h-[720px] overflow-x-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] lg:min-h-screen"
    >
      <BackgroundBlobs />

      <section className="relative mx-auto max-w-[1240px] px-4 pb-10 pt-20 sm:px-6 md:px-10 md:pt-24 lg:h-full lg:px-16 lg:pt-28">
        <div className="relative z-20 max-w-[580px] self-start">
          <h1
            className="reference-heading w-full max-w-[250px] text-left text-[28px] font-light leading-[1.08] tracking-normal text-[var(--text-hero)] sm:w-auto sm:max-w-none sm:text-[43px] lg:text-[56px]"
            style={{ wordSpacing: '0.08em' }}
          >
            <span className="sm:hidden">
              A single platform to
              <br />
              <span className="font-semibold text-[var(--text-hero-strong)]">manage</span> every part
              <br />
              of your <span className="font-semibold text-[var(--text-hero-strong)]">legal work</span>
            </span>
            <span className="hidden sm:inline">
              A single platform to
              <br />
              <span className="font-semibold text-[var(--text-hero-strong)]">manage</span> every part of
              <br />
              your <span className="font-semibold text-[var(--text-hero-strong)]">legal work</span>
            </span>
          </h1>

          <p
            className="reference-copy mt-6 w-full max-w-[260px] text-left text-[16px] font-normal leading-[1.45] text-[var(--text-accent)] sm:w-[70%] sm:max-w-[460px] sm:text-[18px] lg:text-[19px]"
            style={{ wordSpacing: '0.06em' }}
          >
            Track matters, coordinate schedules, manage clients, centralize documents, and handle communication - all in one system.
          </p>

          <div className="relative mt-8 h-[260px] w-full max-w-[360px] overflow-visible lg:hidden">
            <div className="relative h-[260px] w-[360px] origin-left-top scale-[0.75] min-[360px]:scale-[0.85] min-[420px]:scale-100">
              <FloatingCard
                label="Billing"
                icon={<CreditCard className={smallIconClass} strokeWidth={1.9} />}
                iconRotation={-12}
                className="float-mid right-1 top-2 h-[46.07px] w-[165.99px] rotate-[12deg] gap-2 bg-[var(--card-blue)] px-[16px] py-[10px] text-[18px] [&>span:last-child]:text-[18px]"
              />
              <FloatingCard
                label="Matters"
                icon={<Scale className={smallIconClass} strokeWidth={1.9} />}
                iconRotation={12}
                className="float-slow left-[5.67px] top-[10px] h-[46.07px] w-[150.99px] rotate-[-12deg] gap-2 bg-[var(--card-orange)] px-[16px] py-[10px] [&>span:last-child]:text-[18px]"
              />
              <MessageCard compact className="float-slow left-[110.85px] top-[80px] rotate-[6.52deg]" />
              <FloatingCard
                label="Tasks"
                icon={<ListChecks className={smallIconClass} strokeWidth={1.9} />}
                iconRotation={-13.31}
                variant="deep"
                className="float-mid left-[35.69px] top-[130px] h-[46.07px] w-[165.99px] rotate-[13.31deg] gap-2 bg-[var(--card-deep)] px-[16px] py-[10px] [&>span:last-child]:text-[18px]"
              />
              <FloatingCard
                label="Documents"
                icon={<FileText className={smallIconClass} strokeWidth={1.9} />}
                iconRotation={6.73}
                variant="deep"
                className="float-mid left-[144.9px] top-[190px] h-[46.07px] w-[200.66px] rotate-[-6.73deg] gap-2 bg-[var(--card-deep)] px-[16px] py-[10px] [&>span:last-child]:text-[18px]"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-10 hidden lg:block">
          <FloatingCard
            label="Billing"
            icon={<CreditCard className={largeIconClass} strokeWidth={1.7} />}
            iconRotation={-11}
            className="float-mid right-[160px] top-[290px] w-[430px] rotate-[11deg] gap-3 bg-[var(--card-blue)] [&>span:last-child]:text-[26px]"
          />
          <FloatingCard
            label="Matters"
            icon={<Scale className={largeIconClass} strokeWidth={1.7} />}
            iconRotation={11}
            className="float-slow left-[240px] top-[430px] w-[360px] rotate-[-11deg] gap-3 bg-[var(--card-orange)] [&>span:last-child]:text-[26px]"
          />
          <MessageCard className="float-slow left-[620px] top-[430px] rotate-[4deg]" />
          <FloatingCard
            label="Tasks"
            icon={<ListChecks className={largeIconClass} strokeWidth={1.7} />}
            variant="deep"
            className="float-mid left-[calc(50%-180px)] top-[572px] w-[360px] gap-3 bg-[var(--card-deep)] [&>span:last-child]:text-[26px]"
          />
          <FloatingCard
            label="Documents"
            icon={<FolderOpen className={largeIconClass} strokeWidth={1.7} />}
            iconRotation={8}
            variant="deep"
            className="float-mid right-[-82px] top-[540px] w-[480px] rotate-[-8deg] gap-3 bg-[var(--card-deep)] [&>span:last-child]:text-[26px]"
          />
        </div>
      </section>
    </main>
  )
}
