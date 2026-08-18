import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/our-presence")({
  head: () => ({
    meta: [
      { title: "Our Presence | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Our Presence — headquartered in Dubai with strong access across African markets, connecting clients with suppliers, partners, and opportunities globally.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="our-presence" />,
});
