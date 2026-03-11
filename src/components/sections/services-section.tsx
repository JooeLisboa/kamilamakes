'use client';

import { motion } from 'framer-motion';

import { perfumesCopy, services } from '@/data/services';
import { SectionTitle } from '@/components/ui/section-title';

export function ServicesSection() {
  return (
    <section className="space-y-8" id="servicos">
      <SectionTitle eyebrow="Serviços" title="Expertise completa para elevar sua beleza" />
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            id={index === 0 ? 'micropigmentacao' : index === 1 ? 'remocao' : 'perfumes'}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-3xl border border-champagne/15 bg-black/30 p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{service.highlight}</p>
            <h3 className="mt-3 text-xl font-medium">{service.title}</h3>
            <p className="mt-3 text-sm text-champagne/70">{service.description}</p>
          </motion.article>
        ))}
      </div>
      <div className="rounded-3xl border border-roseGold/20 bg-roseGold/10 p-6 whitespace-pre-line text-champagne/90">
        {perfumesCopy}
      </div>
    </section>
  );
}
