import { createFileRoute } from "@tanstack/react-router";
import { SolutionPage } from "@/components/site/SolutionPage";

export const Route = createFileRoute("/solutions/supply-chain-finance")({
  head: () => ({
    meta: [
      { title: "Supply Chain Finance | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Supply Chain Finance from Alkokab Tech Solutions — supporting cash flow, procurement and delivery through structured financing solutions aligned with supply chain operations.",
      },
    ],
  }),
  component: () => <SolutionPage id="supply-chain-finance" />,
});
