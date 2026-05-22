'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type FloatingCardProps = {
  label: string
  icon: ReactNode
  className?: string
  iconRotation?: number
  variant?: 'light' | 'deep'
}

export function FloatingCard({ label, icon, className, iconRotation = 0, variant = 'light' }: FloatingCardProps) {
  const isDeep = variant === 'deep'

  return (
    <div
      className={cn(
        'reference-card card-base absolute flex h-[82px] select-none items-center rounded-full px-8 opacity-0 shadow-[0_14px_32px_var(--shadow-card)] will-change-transform transition-[filter,box-shadow] duration-300 hover:shadow-[0_20px_42px_var(--shadow-card)]',
        className
      )}
    >
      <span
        className={cn(
          '-mr-1 flex h-16 w-16 shrink-0 items-center justify-center overflow-visible rounded-full',
          isDeep ? 'text-[var(--card-orange)]' : 'text-white'
        )}
        style={{ transform: `rotate(${iconRotation}deg)` }}
      >
        {icon}
      </span>
      <span className={cn('whitespace-nowrap text-[40px] font-normal tracking-normal', isDeep ? 'text-[var(--card-orange)]' : 'text-white')}>
        {label}
      </span>
    </div>
  )
}
