import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/supply-chain-finance")({
  head: () => ({
    meta: [
      { title: "Supply Chain Finance | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Supply Chain Finance from Alkokab Tech Solutions — financing that sustains supply chain continuity with working capital support, invoice financing, and supplier funding.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="supply-chain-finance" />,
});
