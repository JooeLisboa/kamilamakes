'use client';

import { motion } from 'framer-motion';

import { perfumesCopy, services } from '@/data/services';
import { SectionTitle } from '@/components/ui/section-title';

export function ServicesSection() {
  return (
    <section className="space-y-10" id="servicos">
      <SectionTitle
        eyebrow="Serviços"
        title="Protocolos de estética e fragrância com acabamento de maison de beleza"
      />

      <div className="space-y-5">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            id={index === 0 ? 'micropigmentacao' : index === 1 ? 'remocao' : 'perfumes'}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[1.8rem] border border-champagne/15 bg-gradient-to-r from-white/[0.03] to-transparent p-7 shadow-insetSoft"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-ivory md:text-3xl">{service.title}</h3>
              <p className="text-[0.65rem] uppercase tracking-[0.33em] text-nude">{service.highlight}</p>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-champagne/72 md:text-base">{service.description}</p>
          </motion.article>
        ))}
      </div>

      <div className="rounded-[1.8rem] border border-roseGold/30 bg-roseGold/[0.08] p-8 text-base leading-relaxed text-champagne/90 whitespace-pre-line shadow-insetSoft">
        {perfumesCopy}
      </div>
    </section>
  );
}
