import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function LocationSection() {
  return (
    <section className="space-y-8">
      <SectionTitle eyebrow="Localização" title="Studio Kamila M em Bauru/SP" />
      <article className="rounded-3xl border border-champagne/15 bg-black/20 p-6">
        <MapPin className="h-8 w-8 text-gold" />
        <p className="mt-4 text-base text-champagne/90">{profile.location}</p>
        <Link
          href="https://maps.google.com/?q=Rua+Dr.+Fuas+de+Mattos+Sabino+2-36+Bauru+SP"
          className="mt-4 inline-flex text-sm text-roseGold underline underline-offset-4"
        >
          Abrir no mapa
        </Link>
      </article>
    </section>
  );
}
