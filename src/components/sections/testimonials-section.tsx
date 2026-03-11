import { testimonials } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function TestimonialsSection() {
  return (
    <section className="space-y-10" id="feedbacks">
      <SectionTitle eyebrow="Depoimentos" title="Relatos de quem buscou excelência e encontrou assinatura" />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-[1.6rem] border border-champagne/15 bg-white/[0.02] p-6 shadow-insetSoft">
            <p className="text-sm leading-relaxed text-champagne/85">“{item.quote}”</p>
            <p className="mt-5 text-[0.65rem] uppercase tracking-[0.3em] text-roseGold">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
