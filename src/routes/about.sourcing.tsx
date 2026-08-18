import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/sourcing")({
  head: () => ({
    meta: [
      { title: "Sourcing | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Sourcing from Alkokab Tech Solutions — connecting you to dependable supply sources through supplier research, verification, and procurement.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="sourcing" />,
});
