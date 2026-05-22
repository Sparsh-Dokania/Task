'use client'

export function BackgroundBlobs() {
  return (
    <div className="hero-background pointer-events-none absolute inset-0 overflow-hidden opacity-0" aria-hidden="true">
      <div className="absolute left-[-12rem] top-[-9rem] h-[28rem] w-[28rem] rounded-full bg-[#dce8ff]/60 blur-[86px] dark:bg-[#20375f]/30" />
      <div className="absolute right-[-10rem] top-[8%] h-[26rem] w-[26rem] rounded-full bg-[#efe8d4]/70 blur-[92px] dark:bg-[#4a3c28]/22" />
      <div className="absolute bottom-[-13rem] left-[26%] h-[30rem] w-[30rem] rounded-full bg-[#e8f1ea]/70 blur-[105px] dark:bg-[#17392f]/24" />
      <div className="absolute bottom-[8%] right-[8%] h-[18rem] w-[18rem] rounded-full bg-[#eadff8]/50 blur-[82px] dark:bg-[#352348]/20" />
      <div className="absolute inset-x-[8%] top-[15%] h-px bg-gradient-to-r from-transparent via-slate-900/5 to-transparent dark:via-white/8" />
    </div>
  )
}
