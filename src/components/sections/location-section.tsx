import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function LocationSection() {
  return (
    <section className="space-y-10">
      <SectionTitle eyebrow="Localização" title="Studio Kamila Miguel · Bauru/SP" />
      <article className="rounded-[1.8rem] border border-champagne/20 bg-gradient-to-r from-white/[0.04] to-transparent p-8 shadow-insetSoft">
        <MapPin className="h-8 w-8 text-gold" />
        <p className="mt-5 text-lg leading-relaxed text-champagne/92">{profile.location}</p>
        <Link
          href="https://maps.google.com/?q=Rua+Dr.+Fuas+de+Mattos+Sabino+2-36+Bauru+SP"
          className="mt-6 inline-flex text-[0.7rem] uppercase tracking-[0.28em] text-roseGold underline underline-offset-4"
        >
          Ver no mapa
        </Link>
      </article>
    </section>
  );
}
