import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { AboutSection } from "@/components/site/AboutSection";
import { CoreValues } from "@/components/site/CoreValues";
import { HowWeWork } from "@/components/site/HowWeWork";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ClientOnly } from "@/components/site/ClientOnly";

const HeroCarousel = lazy(() => import("@/components/site/HeroCarousel").then((m) => ({ default: m.HeroCarousel })));
const Capabilities = lazy(() => import("@/components/site/Capabilities").then((m) => ({ default: m.Capabilities })));
const MaskSequence = lazy(() => import("@/components/site/MaskSequence").then((m) => ({ default: m.MaskSequence })));

function SectionLoader() {
  return <div className="min-h-[40vh]" />;
}

const TITLE = "Alkokab Tech Solutions | End-to-End Solutions from Dubai";
const DESCRIPTION =
  "Alkokab Tech Solutions is a Dubai-based partner delivering end-to-end solutions across technology, trade, finance and operations — supporting governments, institutions and African markets.";

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
        <ClientOnly fallback={<div className="min-h-screen" />}>
          <Suspense fallback={<SectionLoader />}>
            <HeroCarousel />
          </Suspense>
        </ClientOnly>
        <AboutSection />
        <CoreValues />
        <HowWeWork />
        <ClientOnly fallback={<SectionLoader />}>
          <Suspense fallback={<SectionLoader />}>
            <Capabilities />
          </Suspense>
        </ClientOnly>
        <ClientOnly fallback={<div className="min-h-screen" />}>
          <Suspense fallback={<SectionLoader />}>
            <MaskSequence />
          </Suspense>
        </ClientOnly>
      </main>
      <SiteFooter />
    </div>
  );
}
