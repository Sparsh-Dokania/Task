'use client'

import { gsap } from 'gsap'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type FloatingCardProps = {
  label: string
  icon: ReactNode
  bgColor: string
  textColor: string
  darkBgColor?: string
  darkTextColor?: string
  rotation: number
  shadowColor: string
  size?: 'sm' | 'md' | 'lg'
  floatSpeed: number
  depth: number
  className?: string
}

const sizeClasses = {
  sm: 'h-12 gap-2.5 px-4 text-[13px] sm:h-14 sm:px-5 sm:text-sm',
  md: 'h-14 gap-3 px-4 text-sm sm:h-16 sm:px-5 sm:text-[15px]',
  lg: 'h-16 gap-3.5 px-5 text-[15px] sm:h-[4.6rem] sm:px-6 sm:text-base'
}

export function FloatingCard({
  label,
  icon,
  bgColor,
  textColor,
  darkBgColor,
  darkTextColor,
  rotation,
  shadowColor,
  size = 'md',
  floatSpeed,
  depth,
  className
}: FloatingCardProps) {
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = floatRef.current
    if (!card) return

    const context = gsap.context(() => {
      gsap.to(card, {
        y: -8,
        duration: floatSpeed,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      })
    }, card)

    return () => context.revert()
  }, [floatSpeed])

  const handleEnter = () => {
    if (!floatRef.current) return
    gsap.to(floatRef.current, {
          scale: 1.035,
      duration: 0.35,
      ease: 'power3.out'
    })
  }

  const handleLeave = () => {
    if (!floatRef.current) return
    gsap.to(floatRef.current, {
      scale: 1,
      duration: 0.45,
      ease: 'power3.out'
    })
  }

  return (
    <div
      className={cn('scene-card absolute opacity-0 will-change-transform', className)}
      data-depth={depth}
      style={{ rotate: `${rotation}deg` }}
    >
      <div
        ref={floatRef}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        className={cn(
          'flex transform-gpu select-none items-center rounded-full border border-white/72 bg-white/72 font-semibold tracking-[-0.01em] shadow-premium backdrop-blur-2xl transition-[box-shadow,filter] duration-300 hover:shadow-[0_28px_82px_-34px_var(--shadow-color)] dark:border-white/10 dark:bg-white/[0.075] dark:shadow-premium-dark',
          'floating-card-surface',
          sizeClasses[size]
        )}
        style={
          {
            '--shadow-color': shadowColor,
            '--card-bg': bgColor,
            '--card-color': textColor,
            '--card-dark-bg': darkBgColor,
            '--card-dark-color': darkTextColor
          } as React.CSSProperties
        }
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/58 text-current shadow-[inset_0_0_0_1px_rgba(255,255,255,0.62)] backdrop-blur dark:bg-white/10">
          {icon}
        </span>
        <span className="whitespace-nowrap">{label}</span>
      </div>
    </div>
  )
}
