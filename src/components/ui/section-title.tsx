interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-4">
      <span className="inline-block text-[0.65rem] font-medium uppercase tracking-[0.38em] text-nude">{eyebrow}</span>
      <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-ivory md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-relaxed text-champagne/70 md:text-base">{description}</p> : null}
    </div>
  );
}
