import { ReactNode } from 'react';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-lux-gradient">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">{children}</div>
    </div>
  );
}
