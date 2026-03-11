import Link from 'next/link';
import { Film, Instagram } from 'lucide-react';

import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function ContentSection() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="Conteúdo"
        title="Reels, tendências e bastidores do studio"
        description="Acompanhe conteúdos de beleza, transformação e lifestyle no Instagram."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Link
          href={profile.instagram}
          className="group rounded-3xl border border-champagne/15 bg-black/20 p-6 transition hover:border-roseGold/45"
        >
          <Instagram className="h-8 w-8 text-roseGold" />
          <h3 className="mt-4 text-xl">Instagram oficial</h3>
          <p className="mt-2 text-sm text-champagne/70">{profile.instagramHandle}</p>
          <span className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-gold">Abrir perfil</span>
        </Link>
        <article className="rounded-3xl border border-champagne/15 bg-black/20 p-6">
          <Film className="h-8 w-8 text-gold" />
          <h3 className="mt-4 text-xl">Reels de transformação</h3>
          <p className="mt-2 text-sm text-champagne/70">
            Técnicas, antes e depois e insights de tendências em estética com narrativa visual premium.
          </p>
        </article>
      </div>
    </section>
  );
}
