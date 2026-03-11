import { Crown, Sparkles, UserCheck } from 'lucide-react';

import { SectionTitle } from '@/components/ui/section-title';

const items = [
  {
    icon: UserCheck,
    title: '+1000 atendimentos',
    text: 'Resultados reais com protocolo técnico e acompanhamento personalizado.'
  },
  {
    icon: Crown,
    title: 'Influenciadora de beleza',
    text: 'Conteúdo diário que inspira confiança, estilo e autocuidado sofisticado.'
  },
  {
    icon: Sparkles,
    title: 'Especialista premium',
    text: 'Atendimento exclusivo para quem busca performance e experiência de alto padrão.'
  }
];

export function AuthoritySection() {
  return (
    <section className="space-y-8">
      <SectionTitle eyebrow="Autoridade" title="Credibilidade construída com excelência" />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-3xl border border-champagne/15 bg-black/20 p-6">
            <Icon className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-lg font-medium">{title}</h3>
            <p className="mt-2 text-sm text-champagne/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
