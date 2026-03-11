import Link from 'next/link';
import { Film, Instagram } from 'lucide-react';

import { profile } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function ContentSection() {
  return (
    <section className="space-y-10">
      <SectionTitle
        eyebrow="Conteúdo"
        title="Narrativa visual que inspira desejo, confiança e decisão"
        description="Reels editoriais, bastidores de atendimento e conteúdo de beleza com linguagem sofisticada."
      />
      <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <Link
          href={profile.instagram}
          className="group rounded-[1.8rem] border border-champagne/20 bg-gradient-to-br from-white/[0.05] to-transparent p-8 transition duration-300 hover:-translate-y-0.5 hover:border-roseGold/45 hover:shadow-silk"
        >
          <Instagram className="h-8 w-8 text-roseGold" />
          <h3 className="mt-6 text-3xl leading-tight text-ivory">Instagram oficial</h3>
          <p className="mt-2 text-sm text-champagne/70">{profile.instagramHandle}</p>
          <span className="mt-6 inline-block text-[0.65rem] uppercase tracking-[0.3em] text-gold">Acompanhar agora</span>
        </Link>
        <article className="rounded-[1.8rem] border border-champagne/15 bg-white/[0.02] p-8 shadow-insetSoft">
          <Film className="h-8 w-8 text-gold" />
          <h3 className="mt-6 text-2xl leading-tight text-ivory">Reels com direção de beleza</h3>
          <p className="mt-3 text-sm leading-relaxed text-champagne/70">
            Conteúdo pensado para valor percebido alto: transformação, técnica e lifestyle em estética premium.
          </p>
        </article>
      </div>
    </section>
  );
}
