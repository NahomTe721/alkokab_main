import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { AboutSection } from "@/components/site/AboutSection";
import { CoreValues } from "@/components/site/CoreValues";
import { Capabilities } from "@/components/site/Capabilities";
import { MaskSequence } from "@/components/site/MaskSequence";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Alkokab Tech Solutions | Enterprise IT & Cloud in Dubai";
const DESCRIPTION =
  "Alkokab Tech Solutions is a Dubai-based enterprise technology partner delivering cloud, infrastructure, cyber security, enterprise AI, digital printing and solar solutions across the UAE.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutSection />
        <CoreValues />
        <Capabilities />
        <MaskSequence />

      </main>
      <SiteFooter />
    </div>
  );
}
