import { Hero } from "@/components/website/home/hero";
import { Stats } from "@/components/website/home/stats";
import { AiChatbotBanner } from "@/components/website/home/ai-chatbot-banner";
import { VrTour } from "@/components/website/home/vr-tour";
import { WhyChooseUs } from "@/components/website/home/why-choose-us";
import { Testimonials } from "@/components/website/home/testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <AiChatbotBanner />
      <VrTour />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
