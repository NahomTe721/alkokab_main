import { motion } from "framer-motion";
import { Handshake, Lightbulb, Network } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const NODES = [
  {
    label: "Integrated Solutions",
    Icon: Network,
    copy: "We unify multiple business functions under a single coordinated platform, ensuring clarity, continuity, and operational alignment.",
  },
  {
    label: "Structured Execution",
    Icon: Lightbulb,
    copy: "Our teams support projects from initial planning through implementation, monitoring, and completion, maintaining strict adherence to timelines and deliverables.",
  },
  {
    label: "Regional & Global Reach",
    Icon: Handshake,
    copy: "Operating from Dubai with strong access across African markets, we connect clients with suppliers, partners, and opportunities across regional and global ecosystems.",
  },
];

export function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="text-center">
          <span className="eyebrow text-accent-deep">How We Deliver</span>
        </div>

        <div className="relative mt-16 lg:mt-24">
          <svg
            className="pointer-events-none absolute inset-x-0 top-4 z-0 hidden h-[230px] w-full lg:block"
            viewBox="0 0 1200 230"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M20 118 C 220 114, 280 38, 600 46 S 980 96, 1180 52"
              stroke="var(--primary-light)"
              strokeWidth="24"
              strokeLinecap="round"
              opacity="0.12"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.8, ease: EASE }}
            />
            <motion.path
              d="M20 134 C 220 130, 280 54, 600 62 S 980 112, 1180 68"
              stroke="var(--accent)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 2, ease: EASE, delay: 0.15 }}
            />
          </svg>

          <div className="relative z-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
            {NODES.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, ease: EASE, delay: 0.12 * i }}
                className={`flex flex-col items-center text-center ${
                  i === 1 ? "lg:-translate-y-12" : ""
                }`}
              >
                <div className="flex h-40 w-40 items-center justify-center rounded-full border border-border bg-card shadow-card transition-transform duration-500 hover:-translate-y-1.5">
                  <div className="flex h-28 w-28 flex-col items-center justify-center gap-2 rounded-full bg-surface">
                    <node.Icon className="h-8 w-8 text-accent-deep" strokeWidth={1.6} />
                    <span className="font-display text-[13px] font-bold text-primary">
                      {node.label}
                    </span>
                  </div>
                </div>
                <p className="mt-6 max-w-[19rem] text-sm leading-relaxed text-muted-foreground">
                  {node.copy}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
