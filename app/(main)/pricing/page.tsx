import { PricingHero } from "@/components/website/pricing/hero";
import { Packages } from "@/components/website/pricing/packages";

export const metadata = {
  title: "Pricing | Hotel Tours AI",
  description:
    "Simple, transparent pricing for hotel virtual tours and the AI concierge. Bring your own Matterport tour or let us capture it — no surprise travel fees.",
};

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <Packages />
    </main>
  );
}
