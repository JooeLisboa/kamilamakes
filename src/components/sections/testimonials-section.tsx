import { testimonials } from '@/data/profile';
import { SectionTitle } from '@/components/ui/section-title';

export function TestimonialsSection() {
  return (
    <section className="space-y-8" id="feedbacks">
      <SectionTitle eyebrow="Depoimentos" title="Experiências que confirmam o padrão premium" />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="rounded-3xl border border-champagne/15 bg-black/20 p-6">
            <p className="text-sm leading-relaxed text-champagne/80">“{item.quote}”</p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-roseGold">{item.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
