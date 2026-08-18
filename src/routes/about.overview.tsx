import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/overview")({
  head: () => ({
    meta: [
      { title: "About Alkokab Tech | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "About Alkokab Tech Solutions — headquartered in Dubai, integrating technology, sourcing, trade, logistics, finance, and operational capabilities across GCC and African markets.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="overview" />,
});
