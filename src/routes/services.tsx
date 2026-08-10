import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "Our Services | Alkokab Tech Solutions Dubai";
const DESCRIPTION =
  "Explore Alkokab Tech Solutions' enterprise services: cloud, infrastructure, cyber security, enterprise AI, logistics and distribution, digital printing, solar energy and managed support.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <Services />
      </main>
      <SiteFooter />
    </div>
  );
}
