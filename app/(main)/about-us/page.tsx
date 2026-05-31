import { AboutHero } from "@/components/website/about/hero";
import { CompanyInfo } from "@/components/website/about/company";
import { Team } from "@/components/website/about/team";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyInfo />
      <Team />
    </main>
  );
}
