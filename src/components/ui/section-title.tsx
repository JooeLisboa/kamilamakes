interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="space-y-3">
      <span className="text-xs uppercase tracking-[0.3em] text-roseGold">{eyebrow}</span>
      <h2 className="text-3xl font-semibold text-champagne md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-champagne/75 md:text-base">{description}</p> : null}
    </div>
  );
}
