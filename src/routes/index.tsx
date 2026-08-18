import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { AboutSection } from "@/components/site/AboutSection";
import { CoreValues } from "@/components/site/CoreValues";
import { HowWeWork } from "@/components/site/HowWeWork";
import { Capabilities } from "@/components/site/Capabilities";
import { MaskSequence } from "@/components/site/MaskSequence";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Alkokab Tech Solutions | End-to-End Solutions from Dubai";
const DESCRIPTION =
  "Alkokab Tech Solutions is a Dubai-based partner delivering end-to-end solutions across technology, trade, finance and operations — supporting governments, institutions and development partners across GCC and African markets.";

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
        <HowWeWork />
        <Capabilities />
        <MaskSequence />
      </main>
      <SiteFooter />
    </div>
  );
}
