import { Crown, Sparkles, UserCheck } from 'lucide-react';

import { SectionTitle } from '@/components/ui/section-title';

const items = [
  {
    icon: UserCheck,
    title: '+1000 procedimentos realizados',
    text: 'Consistência técnica com resultado delicado, seguro e personalizado para cada cliente.'
  },
  {
    icon: Crown,
    title: 'Influência com credibilidade',
    text: 'Presença digital relevante, construída com conteúdo autoral e experiência real de atendimento.'
  },
  {
    icon: Sparkles,
    title: 'Curadoria de alto padrão',
    text: 'Da micropigmentação aos perfumes árabes: seleção precisa para elevar sua assinatura pessoal.'
  }
];

export function AuthoritySection() {
  return (
    <section className="space-y-10">
      <SectionTitle eyebrow="Autoridade" title="Posicionamento premium sustentado por técnica, estética e confiança" />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-[1.6rem] border border-champagne/15 bg-white/[0.02] p-6 shadow-insetSoft">
            <Icon className="h-7 w-7 text-gold" />
            <h3 className="mt-5 text-2xl leading-tight text-ivory">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-champagne/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
