'use client'

import { gsap } from 'gsap'
import { Moon, Sparkles, SunMedium } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { BackgroundBlobs } from './BackgroundBlobs'
import { FloatingScene } from './FloatingScene'

export function HeroContent() {
  const rootRef = useRef<HTMLElement>(null)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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

      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

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
            stagger: 0.075
          },
          '-=0.7'
        )
    }, root)

    return () => context.revert()
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <main
      ref={rootRef}
      className="relative isolate flex min-h-screen overflow-hidden px-4 py-6 text-slate-950 dark:text-slate-50 sm:px-6 lg:px-8"
    >
      <BackgroundBlobs />
      <div className="relative z-10 mx-auto grid w-full max-w-[91rem] grid-cols-1 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-16">
        <section className="mx-auto flex w-full max-w-[38rem] flex-col items-start pt-7 text-left sm:pt-10 lg:mx-0 lg:pt-0">
          <div className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/[0.07] bg-white/56 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-[0_16px_45px_-32px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-400">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.9} />
            Legal Work Platform
          </div>

          <h1 className="hero-heading max-w-[12ch] text-[clamp(3.05rem,8.2vw,6.65rem)] font-semibold leading-[0.92] tracking-normal text-slate-950 dark:text-white">
            Built for modern legal work.
          </h1>

          <p className="hero-copy mt-7 max-w-[34rem] text-base font-medium leading-8 text-slate-500 dark:text-slate-400 sm:text-lg">
            A calm command center for intake, matters, documents, and client updates, designed to keep complex work moving with clarity.
          </p>

          <div className="hero-actions mt-9 flex flex-wrap items-center gap-3">
            <button className="h-12 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-[0_18px_44px_-24px_rgba(15,23,42,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_20px_52px_-24px_rgba(15,23,42,0.8)] focus:outline-none focus:ring-2 focus:ring-slate-950/20 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
              Request demo
            </button>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-900/[0.08] bg-white/60 text-slate-600 shadow-[0_16px_44px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-300 dark:hover:text-white"
            >
              {isDark ? <SunMedium className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
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
