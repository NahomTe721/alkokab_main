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

type SolutionId = "it-transformation" | "logistics" | "sourcing" | "supply-chain-finance";

type SolutionRoute =
  | "/solutions/it-transformation"
  | "/solutions/logistics"
  | "/solutions/sourcing"
  | "/solutions/supply-chain-finance";

type Solution = {
  id: SolutionId;
  path: SolutionRoute;
  title: string;
  kicker: string;
  description: string;
  image: string;
  points: string[];
};

const SOLUTIONS: Solution[] = [
  {
    id: "it-transformation",
    path: "/solutions/it-transformation",
    title: "IT Transformation",
    kicker: "Systems & Infrastructure",
    description:
      "Supporting the design, implementation and improvement of systems and infrastructure that strengthen operations and enable long-term efficiency.",
    image: hero1,
    points: [
      "Approached as one connected system, so systems and operations move together from the start.",
      "The right mix of technical, commercial and operational support matched to each project's real requirements.",
      "Managed end to end — from planning and implementation through to training and follow-through.",
    ],
  },
  {
    id: "logistics",
    path: "/solutions/logistics",
    title: "Logistics",
    kicker: "Movement & Delivery",
    description:
      "Coordinating the movement, storage and delivery of goods across local and international supply chains.",
    image: hero2,
    points: [
      "Every stage handled as part of one continuous process, from planning and sourcing to execution.",
      "Coordinated capability brought together based on the real requirements of each route and market.",
      "Strong experience in cross-market, multi-country delivery across GCC and African markets.",
    ],
  },
  {
    id: "sourcing",
    path: "/solutions/sourcing",
    title: "Sourcing",
    kicker: "Supply & Procurement",
    description:
      "Identifying, securing and coordinating suppliers, materials and products aligned with operational and project needs.",
    image: hero3,
    points: [
      "Suppliers, materials and products aligned to each project's real requirements.",
      "Sourcing treated as part of a connected system, from selection through to delivery.",
      "International partnerships supporting coordinated, multi-country supply and execution.",
    ],
  },
  {
    id: "supply-chain-finance",
    path: "/solutions/supply-chain-finance",
    title: "Supply Chain Finance",
    kicker: "Finance & Cash Flow",
    description:
      "Supporting cash flow, procurement and delivery through structured financing solutions aligned with supply chain operations.",
    image: hero4,
    points: [
      "Structured financing solutions that keep sourcing, procurement and delivery moving.",
      "Commercial and financial support aligned with the real requirements of each engagement.",
      "One continuous process from planning and sourcing through to execution and follow-through.",
    ],
  },
];

const DELIVERY_NODES = [
  {
    title: "Integrated Project Approach",
    copy: "Each project is treated as one connected system, not isolated tasks, so every moving part works together from the start.",
  },
  {
    title: "Coordinated Capability Alignment",
    copy: "We bring together the right mix of technical, commercial and operational support based on the project's real requirements.",
  },
  {
    title: "Cross-Market Execution",
    copy: "Through our international partnerships, we support projects across GCC and African markets with proven multi-country delivery.",
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
          <span className="eyebrow inline-flex items-center gap-2 text-accent">
            <span className="h-[2px] w-8 bg-gold" />
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
          <span className="eyebrow inline-flex items-center gap-2 text-accent-deep">
            <span className="h-[2px] w-8 bg-gold" />
            What's Included
          </span>
          <h2 className="gold-rule mt-5 font-display text-3xl font-extrabold leading-tight text-primary sm:text-[2.4rem]">
            Delivered as part of one connected process.
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
            {solution.description} Our approach brings the right capability together and manages
            every stage as one continuous process — from planning and sourcing to execution and
            follow-through.
          </p>
          <ul className="mt-8 space-y-4">
            {solution.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-[14.5px] leading-relaxed text-muted-foreground"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep"
                  strokeWidth={1.7}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-1">
          {DELIVERY_NODES.map((node, i) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
              className="bg-card p-8 transition-colors duration-500 hover:bg-accent-soft"
            >
              <span className="eyebrow text-accent-deep">0{i + 1}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{node.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                {node.copy}
              </p>
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
