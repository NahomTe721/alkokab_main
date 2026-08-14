import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/solutions/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Logistics from Alkokab Tech Solutions — coordinating the movement, storage and delivery of goods across local and international supply chains.",
      },
    ],
  }),
  component: () => <SolutionPage id="logistics" />,
});
