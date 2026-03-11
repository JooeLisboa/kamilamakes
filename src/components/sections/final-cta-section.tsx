import { profile } from '@/data/profile';
import { buildWhatsappLink } from '@/lib/whatsapp';
import { CtaButton } from '@/components/ui/cta-button';

export function FinalCtaSection() {
  const cta = buildWhatsappLink(profile.whatsappNumber, profile.whatsappPrefill);

  return (
    <section className="rounded-3xl border border-roseGold/30 bg-roseGold/10 p-8 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Atendimento exclusivo</p>
      <h2 className="mt-3 text-3xl font-semibold">Pronta para seu próximo nível de beleza?</h2>
      <p className="mx-auto mt-3 max-w-xl text-champagne/75">
        Fale com a Kamila e receba uma orientação personalizada para micropigmentação, remoção ou fragrâncias.
      </p>
      <div className="mt-6 flex justify-center">
        <CtaButton href={cta} label="Falar no WhatsApp" />
      </div>
    </section>
  );
}
