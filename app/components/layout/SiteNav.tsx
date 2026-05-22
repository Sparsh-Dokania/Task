'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Scale } from 'lucide-react'
import { ModeToggle, type HeroMode } from '@/components/ui/ModeToggle'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export function SiteNav() {
  const pathname = usePathname()
  const router = useRouter()
  const mode: HeroMode = pathname === '/creative' ? 'creative' : 'reference'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto flex max-w-[91rem] items-center justify-between gap-3">
        <Link
          href="/"
          className="group inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] px-3.5 text-sm font-semibold text-[var(--text-primary)] shadow-[0_18px_56px_-34px_var(--shadow-strong)] backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5"
          aria-label="Praava Legal home"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--surface-subtle)] text-[var(--text-accent)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-4deg] group-hover:shadow-[0_0_24px_var(--spotlight-glow)]">
            <Scale className="h-3.5 w-3.5" strokeWidth={1.8} />
          </span>
          <span className="hidden sm:inline">Praava Legal</span>
        </Link>

        <div className="flex items-center gap-2">
          <ModeToggle
            mode={mode}
            onChange={(nextMode) => {
              router.push(nextMode === 'creative' ? '/creative' : '/reference')
            }}
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
