'use client'

export function BackgroundBlobs() {
  return (
    <div className="hero-background pointer-events-none absolute inset-0 overflow-hidden opacity-0" aria-hidden="true">
      <div className="absolute left-[-12rem] top-[-9rem] h-[28rem] w-[28rem] rounded-full bg-[var(--blob-secondary)] blur-[86px]" />
      <div className="absolute right-[-10rem] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[var(--blob-warm)] blur-[92px]" />
      <div className="absolute bottom-[-13rem] left-[26%] h-[30rem] w-[30rem] rounded-full bg-[var(--blob-tertiary)] blur-[105px]" />
      <div className="absolute bottom-[8%] right-[8%] h-[18rem] w-[18rem] rounded-full bg-[var(--surface-subtle)] blur-[82px]" />
      <div className="absolute inset-x-[8%] top-[15%] h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent" />
    </div>
  )
}
