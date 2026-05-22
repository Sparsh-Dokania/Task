'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Scale } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const links = [
  { href: '/reference', label: 'Reference' },
  { href: '/creative', label: 'Creative' }
]

export function SiteNav() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto flex max-w-[91rem] items-center justify-between gap-3">
        <Link
          href="/"
          className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3.5 text-sm font-semibold text-[var(--text-primary)] shadow-[0_18px_56px_-34px_var(--shadow-strong)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5"
          aria-label="Praava Legal home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--surface-subtle)] text-[var(--text-accent)] transition duration-300 group-hover:rotate-[-4deg] group-hover:shadow-[0_0_24px_var(--spotlight-glow)]">
            <Scale className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <span className="hidden sm:inline">Praava Legal</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="grid h-11 grid-cols-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] p-1 shadow-[0_18px_56px_-34px_var(--shadow-strong)] backdrop-blur-2xl">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'grid h-9 min-w-[4.7rem] place-items-center rounded-full px-2.5 text-sm font-semibold tracking-normal transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-accent)]/35 sm:min-w-[5.6rem] sm:px-3',
                    isActive
                      ? 'bg-[var(--toggle-thumb)] text-[var(--toggle-thumb-text)] shadow-[0_12px_28px_-18px_var(--shadow-strong)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
