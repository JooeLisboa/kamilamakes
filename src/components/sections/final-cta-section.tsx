import { profile } from '@/data/profile';
import { buildWhatsappLink } from '@/lib/whatsapp';
import { CtaButton } from '@/components/ui/cta-button';

export function FinalCtaSection() {
  const cta = buildWhatsappLink(profile.whatsappNumber, profile.whatsappPrefill);

  return (
    <section className="rounded-[2rem] border border-roseGold/35 bg-gradient-to-br from-roseGold/[0.13] via-roseGold/[0.08] to-transparent p-8 text-center shadow-insetSoft md:p-12">
      <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">Consultoria exclusiva</p>
      <h2 className="mt-4 text-4xl leading-[1.05] text-ivory md:text-5xl">Seu próximo capítulo de beleza começa aqui.</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-champagne/80 md:text-base">
        Agende uma conversa e receba direcionamento personalizado para micropigmentação, remoção a laser ou perfumes árabes.
      </p>
      <div className="mt-7 flex justify-center">
        <CtaButton href={cta} label="Iniciar conversa no WhatsApp" />
      </div>
    </section>
  );
}
