import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/solutions/technology-transformation")({
  head: () => ({
    meta: [
      { title: "Technology Transformation | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Technology Transformation from Alkokab Tech Solutions — modernizing operations through digital transformation, system modernization, and process automation.",
      },
    ],
  }),
  component: () => <SolutionPage id="technology-transformation" />,
});
