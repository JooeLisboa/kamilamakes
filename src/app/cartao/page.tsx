import { SiteShell } from "@/components/layout/site-shell";
import { PremiumCard } from "@/components/card/premium-card";

export default function CartaoPage() {
  return (
    <SiteShell>
      <main className="flex min-h-[84vh] items-center justify-center py-6 md:py-10">
        <PremiumCard />
      </main>
    </SiteShell>
  );
}
