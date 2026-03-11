"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { cardLinks } from "@/data/socialLinks";
import { chips, profile } from "@/data/profile";
import { buildWhatsappLink } from "@/lib/whatsapp";

export function PremiumCard() {
  const whatsappLink = buildWhatsappLink(
    profile.whatsappNumber,
    profile.whatsappPrefill,
  );

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2.3rem] border border-champagne/20 bg-gradient-to-b from-graphite/90 via-noir/95 to-black p-5 shadow-luxe md:p-6">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-32 rounded-full bg-roseGold/15 blur-3xl" />

      <div className="relative text-center">
        <div className="mx-auto inline-flex rounded-full border border-champagne/25 p-1.5 shadow-insetSoft">
          <Image
            src={profile.heroImage}
            alt={profile.name}
            width={156}
            height={156}
            className="h-28 w-28 rounded-full object-cover md:h-60 md:w-60"
          />
        </div>
        <h1 className="mt-5 text-3xl leading-none text-ivory">
          {profile.name}
        </h1>
        <p className="mt-2 text-[0.68rem] uppercase tracking-[0.24em] text-champagne/62">
          {profile.cardSubtitle}
        </p>
      </div>

      <div className="relative mt-5 flex flex-wrap justify-center gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-champagne/20 bg-white/[0.02] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-champagne/82"
          >
            {chip}
          </span>
        ))}
      </div>

      <Link
        href={whatsappLink}
        className="group relative mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border border-roseGold/45 bg-gradient-to-r from-roseGold/80 to-roseGold/60 px-4 py-3.5 text-sm font-semibold text-ivory shadow-silk transition duration-300 hover:-translate-y-0.5 hover:from-roseGold hover:to-roseGold/80"
      >
        Falar no WhatsApp
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      <div className="relative mt-4 space-y-2.5">
        {cardLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <Link
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-champagne/20 bg-white/[0.02] px-4 py-3.5 text-sm text-champagne/92 shadow-insetSoft transition duration-300 hover:-translate-y-0.5 hover:border-roseGold/50 hover:bg-white/[0.05]"
              >
                <span className="font-medium">{link.label}</span>
                <span className="flex items-center gap-1.5">
                  <Icon className="h-4 w-4 text-gold" />
                  <ArrowUpRight className="h-3.5 w-3.5 text-champagne/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
