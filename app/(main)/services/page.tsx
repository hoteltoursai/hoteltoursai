import { ServicesHero } from "@/components/website/services/hero";
import { Industries } from "@/components/website/services/industries";
import { Process } from "@/components/website/services/process";

export const metadata = {
  title: "Services | Hotel Tours AI",
  description:
    "Matterport 3D virtual tours and an AI concierge chatbot for hotels across the UK — capturing every guest room, suite and shared space to drive direct bookings.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <Industries />
      <Process />
    </main>
  );
}
