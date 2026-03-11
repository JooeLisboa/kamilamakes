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
      className="group inline-flex items-center gap-2.5 rounded-full border border-champagne/30 bg-shimmer px-6 py-3 text-sm font-medium text-ivory shadow-insetSoft transition duration-300 hover:-translate-y-0.5 hover:border-roseGold/65 hover:shadow-silk"
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
