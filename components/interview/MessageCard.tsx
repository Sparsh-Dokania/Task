'use client'

import { cn } from '@/lib/utils'

type MessageCardProps = {
  className?: string
  compact?: boolean
}

export function MessageCard({ className, compact = false }: MessageCardProps) {
  return (
    <div
      className={cn(
        'reference-card card-base absolute flex items-center rounded-[90px] bg-[var(--card-message)] opacity-0 shadow-[0_14px_32px_var(--shadow-card)] will-change-transform transition-[filter,box-shadow] duration-300 hover:shadow-[0_20px_42px_var(--shadow-card)]',
        compact ? 'h-[46.07px] w-[300.43px] gap-[10px] overflow-hidden px-[14px]' : 'h-[96px] w-[390px] gap-2 pl-10 pr-6',
        className
      )}
    >
      <div className={cn('w-1 rounded-full bg-[var(--card-accent)]', compact ? 'h-6' : 'h-11')} />
      <div className={cn('grid shrink-0 place-items-center rounded-full bg-[var(--avatar-bg)]', compact ? 'h-6 w-6' : 'h-11 w-11')}>
        <span className={cn('font-semibold leading-none text-[var(--avatar-text)]', compact ? 'text-[9px]' : 'text-sm')}>JD</span>
      </div>
      <div className="min-w-0">
        <p className={cn('truncate font-normal leading-none text-[var(--card-message-text)]', compact ? 'text-[18px]' : 'text-[16px]')}>
          John Doe - Portal
        </p>
        {!compact && (
          <p className="mt-1 line-clamp-2 max-w-[180px] text-[11px] leading-tight text-[var(--card-muted-text)]">
            Hey! Could you please review a document for me?
          </p>
        )}
        {!compact && <p className="mt-1 truncate text-[11px] leading-none text-[var(--text-accent)]">MAT-2233 - 2 h ago</p>}
      </div>
    </div>
  )
}
