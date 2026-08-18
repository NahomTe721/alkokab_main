import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { SiteFooter } from "@/components/site/SiteFooter";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

type SolutionId = "technology-transformation" | "logistics" | "sourcing" | "supply-chain-finance";

type SolutionRoute =
  | "/solutions/technology-transformation"
  | "/solutions/logistics"
  | "/solutions/sourcing"
  | "/solutions/supply-chain-finance";

type Section = {
  heading: string;
  intro?: string;
  points?: string[];
  steps?: string[];
};

type Solution = {
  id: SolutionId;
  path: SolutionRoute;
  title: string;
  kicker: string;
  description: string;
  image: string;
  sections: Section[];
};

const SOLUTIONS: Solution[] = [
  {
    id: "technology-transformation",
    path: "/solutions/technology-transformation",
    title: "Technology Transformation",
    kicker: "Modernizing Operations Through Technology",
    description:
      "We support organizations in adopting new technologies, upgrading systems, and improving digital processes. Our approach covers the full transformation journey—from assessment and opportunity identification to implementation and long-term optimization.",
    image: hero1,
    sections: [
      {
        heading: "Key Areas of Support",
        points: [
          "Digital Transformation",
          "System Modernization",
          "Process Automation",
          "Technology Integration",
          "Data & Digital Solutions",
          "Technology Infrastructure",
        ],
      },
    ],
  },
  {
    id: "logistics",
    path: "/solutions/logistics",
    title: "Logistics",
    kicker: "Efficient Movement Across Borders & Markets",
    description:
      "Alkokab Tech simplifies complex supply chain requirements across the GCC, Africa, and international markets. We coordinate transportation partners, customs support, storage facilities, and delivery services to ensure dependable movement of goods.",
    image: hero2,
    sections: [
      {
        heading: "Capabilities",
        points: [
          "International Shipping",
          "Import & Export Support",
          "Distribution & Delivery",
          "Cargo Monitoring",
        ],
      },
      {
        heading: "Shipment Process",
        steps: [
          "Shipment Planning",
          "Shipping & Border Processing",
          "Final Delivery",
        ],
      },
    ],
  },
  {
    id: "sourcing",
    path: "/solutions/sourcing",
    title: "Sourcing",
    kicker: "Connecting You to Dependable Supply Sources",
    description:
      "We help businesses secure the products, equipment, and materials they require through trusted supply channels.",
    image: hero3,
    sections: [
      {
        heading: "Capabilities",
        points: [
          "Supplier Research",
          "Supplier Verification",
          "Product & Material Procurement",
          "Price & Terms Negotiation",
          "Product Quality & Compliance",
          "Market & Cost Analysis",
        ],
      },
      {
        heading: "Process",
        steps: [
          "Requirement Assessment",
          "Market & Supplier Search",
          "Evaluation & Commercial Discussion",
          "Verification & Procurement",
        ],
      },
    ],
  },
  {
    id: "supply-chain-finance",
    path: "/solutions/supply-chain-finance",
    title: "Supply Chain Finance",
    kicker: "Financing That Sustains Supply Chain Continuity",
    description:
      "We provide financial solutions that support procurement, supplier payments, and operational stability.",
    image: hero4,
    sections: [
      {
        heading: "Solutions",
        points: [
          "Working Capital Support",
          "Invoice Financing",
          "Supplier Funding",
          "Structured Payment Solutions",
        ],
      },
      {
        heading: "Operational Models",
        points: [
          "Invoice Financing",
          "Early Payment Programs",
          "Supplier Capital Support",
          "Supply Chain Funding",
        ],
      },
    ],
  },
];

function SolutionHero({ solution }: { solution: Solution }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-primary pt-20">
      <motion.img
        key={solution.id}
        src={solution.image}
        alt={solution.title}
        width={1920}
        height={1088}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ opacity: { duration: 1.1, ease: EASE }, scale: { duration: 2, ease: EASE } }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="max-w-3xl"
        >
          <span className="eyebrow text-accent">
            {solution.kicker}
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl lg:text-[4.2rem]">
            {solution.title}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-primary-foreground/90 sm:text-lg">
            {solution.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-foreground transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Partner With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-3 border-2 border-primary-foreground/70 px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors duration-500 hover:border-gold hover:text-accent"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DeliverySection({ solution }: { solution: Solution }) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <span className="eyebrow text-accent-deep">
            What's Included
          </span>
          <h2 className="gold-rule mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-[2.4rem]">
            Delivered as part of one connected process.
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
            {solution.description}
          </p>
        </div>

        <div className="space-y-8">
          {solution.sections.map((section) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="bg-card p-8 transition-colors duration-500 hover:bg-accent-soft"
            >
              <h3 className="font-display text-lg font-bold text-primary">{section.heading}</h3>
              {section.intro && (
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {section.intro}
                </p>
              )}
              {section.points && (
                <ul className="mt-4 space-y-2.5">
                  {section.points.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" strokeWidth={1.7} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.steps && (
                <ol className="mt-4 space-y-3">
                  {section.steps.map((item, i) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-accent-soft text-[11px] font-bold text-accent-deep">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OtherSolutions({ current }: { current: Solution }) {
  const others = SOLUTIONS.filter((s) => s.id !== current.id);
  return (
    <section className="bg-surface py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="text-center">
          <span className="eyebrow text-accent-deep">Explore More</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary sm:text-[2.4rem]">
            Other Solutions
          </h2>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="group relative overflow-hidden"
            >
              <Link to={s.path} className="relative block h-full">
                <img
                  src={s.image}
                  alt={s.title}
                  width={1920}
                  height={1088}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
                <div className="absolute inset-0 bg-primary/70 transition-colors duration-500 group-hover:bg-primary/55" />
                <div className="relative flex min-h-[220px] flex-col justify-end p-7">
                  <span className="eyebrow text-accent">{s.kicker}</span>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-primary-foreground">
                    {s.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">
                    View Solution
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SolutionPage({ id }: { id: SolutionId }) {
  const solution = SOLUTIONS.find((s) => s.id === id) ?? SOLUTIONS[0]!;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SolutionHero solution={solution} />
        <DeliverySection solution={solution} />
        <OtherSolutions current={solution} />
      </main>
      <SiteFooter />
    </div>
  );
}
