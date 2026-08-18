import { createFileRoute } from "@tanstack/react-router";
import { AboutPageComponent } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Alkokab Tech Solutions" },
      {
        name: "description",
        content:
          "Careers at Alkokab Tech Solutions — join a multidisciplinary team working on real-world projects across GCC and African markets.",
      },
    ],
  }),
  component: () => <AboutPageComponent id="careers" />,
});
