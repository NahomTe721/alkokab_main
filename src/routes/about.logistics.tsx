import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/logistics")({
  head: () => ({
    meta: [
      { title: "Logistics | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Logistics from Alkokab Tech Solutions — efficient movement across borders and markets with coordinated transportation, customs support, and delivery services.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="logistics" />,
});
