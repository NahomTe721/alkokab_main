import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/solutions/sourcing")({
  head: () => ({
    meta: [
      { title: "Sourcing | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Sourcing from Alkokab Tech Solutions — identifying, securing and coordinating suppliers, materials and products aligned with operational and project needs.",
      },
    ],
  }),
  component: () => <SolutionPage id="sourcing" />,
});
