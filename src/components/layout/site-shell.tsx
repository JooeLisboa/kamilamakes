import { ReactNode } from 'react';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-veil" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[860px] -translate-x-1/2 rounded-full bg-roseGold/10 blur-[110px]" />
      <div className="pointer-events-none absolute -left-36 bottom-10 h-72 w-72 rounded-full bg-gold/10 blur-[100px]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-10 md:px-10 md:py-16">{children}</div>
    </div>
  );
}
