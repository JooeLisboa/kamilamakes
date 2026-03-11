'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { profile } from '@/data/profile';
import { buildWhatsappLink } from '@/lib/whatsapp';
import { CtaButton } from '@/components/ui/cta-button';

export function HeroSection() {
  const cta = buildWhatsappLink(profile.whatsappNumber, profile.whatsappPrefill);

  return (
    <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-roseGold">{profile.instagramHandle}</p>
        <h1 className="text-4xl font-semibold leading-tight text-champagne md:text-6xl">{profile.headline}</h1>
        <p className="max-w-xl text-champagne/75 md:text-lg">{profile.subheadline}</p>
        <div className="flex flex-wrap gap-3">
          {profile.stats.map((stat) => (
            <span key={stat} className="rounded-full border border-champagne/20 px-4 py-2 text-xs text-champagne/85">
              {stat}
            </span>
          ))}
        </div>
        <CtaButton href={cta} label="Agendar no WhatsApp" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-roseGold/20 via-gold/10 to-transparent blur-xl" />
        <Image
          src={profile.heroImage}
          alt={profile.name}
          width={700}
          height={900}
          className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-luxe"
          priority
        />
      </motion.div>
    </section>
  );
}
