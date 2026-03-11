'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { cardLinks } from '@/data/socialLinks';
import { chips, profile } from '@/data/profile';
import { buildWhatsappLink } from '@/lib/whatsapp';

export function PremiumCard() {
  const whatsappLink = buildWhatsappLink(profile.whatsappNumber, profile.whatsappPrefill);

  return (
    <div className="mx-auto w-full max-w-md rounded-[2.2rem] border border-champagne/20 bg-black/55 p-5 shadow-luxe backdrop-blur">
      <div className="text-center">
        <Image
          src={profile.heroImage}
          alt={profile.name}
          width={140}
          height={140}
          className="mx-auto h-28 w-28 rounded-full border-2 border-roseGold/70 object-cover"
        />
        <h1 className="mt-4 text-2xl font-semibold">{profile.name}</h1>
        <p className="mt-1 text-sm text-champagne/70">{profile.cardSubtitle}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span key={chip} className="rounded-full border border-champagne/20 px-3 py-1 text-[11px] text-champagne/85">
            {chip}
          </span>
        ))}
      </div>

      <Link
        href={whatsappLink}
        className="mt-5 flex w-full justify-center rounded-2xl bg-roseGold px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-glow"
      >
        Falar no WhatsApp
      </Link>

      <div className="mt-4 space-y-3">
        {cardLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <Link
                href={link.href}
                className="flex items-center justify-between rounded-2xl border border-champagne/20 bg-white/[0.03] px-4 py-3 text-sm transition hover:border-roseGold/50 hover:bg-white/[0.06]"
              >
                <span>{link.label}</span>
                <Icon className="h-4 w-4 text-gold" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
