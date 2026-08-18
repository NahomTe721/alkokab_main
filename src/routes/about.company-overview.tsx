import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/company-overview")({
  head: () => ({
    meta: [
      { title: "Overview | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Overview of Alkokab Tech Solutions — a Dubai-headquartered business solutions provider delivering integrated services across technology, trade, finance, and operations.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="company-overview" />,
});
