import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/technology-transformation")({
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
  component: () => <AboutPageComponent id="technology-transformation" />,
});
