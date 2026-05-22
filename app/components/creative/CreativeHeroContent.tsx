'use client'

import { gsap } from 'gsap'
import { Scale } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { motion } from '@/lib/motion'
import { BackgroundBlobs } from './BackgroundBlobs'
import { FloatingScene } from './FloatingScene'

export function CreativeHeroContent() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const context = gsap.context(() => {
      gsap.set(['.hero-kicker', '.hero-heading', '.hero-copy', '.hero-actions'], {
        y: 20,
        opacity: 0,
        filter: 'blur(10px)'
      })
      gsap.set('.scene-card', {
        y: 24,
        opacity: 0,
        filter: 'blur(14px)'
      })

      const timeline = gsap.timeline({ defaults: { ease: motion.ease } })

      timeline
        .to('.hero-background', { opacity: 1, duration: 0.85 })
        .to('.hero-kicker', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7 }, '-=0.45')
        .to('.hero-heading', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9 }, '-=0.46')
        .to('.hero-copy', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.74 }, '-=0.56')
        .to('.hero-actions', { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.66 }, '-=0.48')
        .to(
          '.scene-card',
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.82,
            stagger: motion.stagger
          },
          '-=0.7'
        )
    }, root)

    return () => context.revert()
  }, [])

  return (
    <main
      ref={rootRef}
      className="relative isolate flex min-h-screen overflow-hidden bg-[var(--bg-primary)] px-4 py-6 text-[var(--text-primary)] sm:px-6 lg:px-8"
    >
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto grid w-full max-w-[91rem] grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-16">
        <section className="mx-auto flex w-full max-w-[38rem] flex-col items-start pt-24 text-left sm:pt-28 lg:mx-0 lg:pt-0">
          <div className="hero-kicker group mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)] shadow-[0_16px_45px_-32px_var(--shadow-strong)] backdrop-blur-xl">
            <Scale className="h-3.5 w-3.5 text-[var(--text-accent)] opacity-80 transition duration-300 group-hover:rotate-[-4deg] group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_var(--spotlight-glow)]" strokeWidth={1.8} />
            Praava Legal
          </div>

          <h1 className="hero-heading max-w-[12ch] text-[clamp(3.05rem,8.2vw,6.65rem)] font-semibold leading-[0.92] tracking-normal text-[var(--text-primary)]">
            Built for modern legal work.
          </h1>

          <p className="hero-copy mt-7 max-w-[34rem] text-base font-medium leading-8 text-[var(--text-secondary)] sm:text-lg">
            A calm command center for intake, matters, documents, and client updates, designed to keep complex work moving with clarity.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-3">
            <button className="h-12 rounded-full bg-[var(--button-primary-bg)] px-6 text-sm font-semibold text-[var(--button-primary-text)] shadow-[0_18px_44px_-24px_var(--shadow-strong)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--button-primary-hover)] hover:shadow-[0_20px_52px_-24px_var(--shadow-strong)] focus:outline-none focus:ring-2 focus:ring-[var(--text-accent)]/25">
              Request demo
            </button>
          </div>
        </section>

        <section className="relative min-h-[27rem] pb-5 sm:min-h-[31rem] lg:min-h-[35rem] lg:pb-0">
          <FloatingScene />
        </section>
      </div>
    </main>
  )
}
