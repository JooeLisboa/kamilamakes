import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface CtaButtonProps {
  href: string;
  label: string;
}

export function CtaButton({ href, label }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-roseGold/40 bg-roseGold px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-glow"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
