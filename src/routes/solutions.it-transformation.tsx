import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/solutions/it-transformation")({
  head: () => ({
    meta: [
      { title: "IT Transformation | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "IT Transformation from Alkokab Tech Solutions — designing, implementing and improving systems and infrastructure that strengthen operations and enable long-term efficiency.",
      },
    ],
  }),
  component: () => <SolutionPage id="it-transformation" />,
});
