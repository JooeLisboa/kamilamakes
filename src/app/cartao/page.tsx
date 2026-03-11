import { SiteShell } from '@/components/layout/site-shell';
import { PremiumCard } from '@/components/card/premium-card';

export default function CartaoPage() {
  return (
    <SiteShell>
      <main className="flex min-h-[80vh] items-center justify-center">
        <PremiumCard />
      </main>
    </SiteShell>
  );
}
