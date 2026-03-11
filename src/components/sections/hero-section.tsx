'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { profile } from '@/data/profile';
import { buildWhatsappLink } from '@/lib/whatsapp';
import { CtaButton } from '@/components/ui/cta-button';

export function HeroSection() {
  const cta = buildWhatsappLink(profile.whatsappNumber, profile.whatsappPrefill);

  return (
    <section className="grid items-end gap-10 pb-8 pt-4 md:grid-cols-[1.1fr_0.9fr] md:pb-14 md:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-7"
      >
        <p className="text-[0.66rem] uppercase tracking-[0.36em] text-nude">Assinatura de beleza premium · {profile.instagramHandle}</p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-[0.96] text-ivory md:text-7xl">
          Beleza elevada ao nível
          <span className="block text-nude">da alta sofisticação.</span>
        </h1>
        <p className="max-w-lg text-base leading-relaxed text-champagne/78 md:text-lg">
          Micropigmentação autoral, remoção a laser precisa e perfumes árabes de presença memorável.
        </p>

        <div className="flex flex-wrap gap-3 border-l border-champagne/20 pl-4 md:pl-6">
          {profile.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-full border border-champagne/20 bg-white/[0.015] px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-champagne/75"
            >
              {stat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <CtaButton href={cta} label="Falar no WhatsApp" />
          <span className="text-xs uppercase tracking-[0.25em] text-champagne/45">Atendimento exclusivo</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.1 }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[2.25rem] border border-champagne/15 bg-white/[0.02] shadow-insetSoft" />
        <div className="absolute -right-4 top-8 hidden h-44 w-44 rounded-full border border-gold/35 bg-gold/5 blur-sm md:block" />
        <Image
          src={profile.heroImage}
          alt={profile.name}
          width={900}
          height={1100}
          className="relative h-[560px] w-full rounded-[2rem] object-cover shadow-luxe"
          priority
        />
      </motion.div>
    </section>
  );
}
