'use client'

import { gsap } from 'gsap'
import { Mail } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type MessageCardProps = {
  className?: string
  rotation?: number
  floatSpeed?: number
  depth?: number
}

export function MessageCard({
  className,
  rotation = -4,
  floatSpeed = 5.8,
  depth = 1.15
}: MessageCardProps) {
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = floatRef.current
    if (!card) return

    const context = gsap.context(() => {
      gsap.to(card, {
        y: -7,
        duration: floatSpeed,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }, card)

    return () => context.revert()
  }, [floatSpeed])

  return (
    <div
      className={cn('scene-card absolute opacity-0 will-change-transform', className)}
      data-depth={depth}
      style={{ rotate: `${rotation}deg` }}
    >
      <div
        ref={floatRef}
        className="group flex w-[15.5rem] transform-gpu items-stretch overflow-hidden rounded-[1.65rem] border border-[var(--border-subtle)] bg-[var(--surface-glass-strong)] shadow-[0_24px_72px_-34px_var(--shadow-strong)] backdrop-blur-2xl transition-[box-shadow] duration-300 sm:w-[16.75rem]"
      >
        <div className="w-1.5 shrink-0 bg-[var(--card-accent)]" />
        <div className="flex min-w-0 flex-1 gap-3 px-4 py-3.5">
          <div className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--avatar-bg)] text-sm font-semibold text-[var(--avatar-text)] shadow-[0_12px_28px_-14px_var(--shadow-strong)]">
            JD
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[var(--surface-glass-strong)] bg-[var(--status-online)]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-[var(--card-accent)]" strokeWidth={1.8} />
              <p className="truncate text-[13px] font-semibold leading-5 text-[var(--text-primary)]">
                John Doe - Portal
              </p>
            </div>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--text-muted)]">
              Client update
            </p>
            <p className="mt-1.5 line-clamp-2 text-[12px] leading-5 text-[var(--text-secondary)]">
              Uploaded signed exhibits for your review before tomorrow&apos;s filing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
