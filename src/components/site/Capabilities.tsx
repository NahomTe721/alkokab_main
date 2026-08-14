import { motion } from "framer-motion";
import { CloudCog, Printer, SunMedium } from "lucide-react";
import vr from "@/assets/capability-vr.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

const BADGES = [
  {
    label: "Technology",
    Icon: CloudCog,
    copy: "We bring together the right mix of technical, commercial and operational support to match each project's real requirements.",
  },
  {
    label: "Trade & Sourcing",
    Icon: Printer,
    copy: "From planning and sourcing to execution and follow-through, every stage is managed as part of one continuous process.",
  },
  {
    label: "Logistics & Delivery",
    Icon: SunMedium,
    copy: "Across GCC and African markets, we coordinate multi-country delivery through our international partnerships.",
  },
];

export function Capabilities() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1, ease: EASE }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="hex-3d relative">
            <div className="clip-hept bg-gradient-to-br from-accent via-royal to-primary p-[4px]">
              <div className="clip-hept relative">
                <img
                  src={vr}
                  alt="Multidisciplinary team coordinating complex project delivery"
                  width={1200}
                  height={1408}
                  loading="lazy"
                  className="h-[440px] w-full object-cover lg:h-[560px]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-white/25" />
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <span className="eyebrow text-accent-deep">What We Do</span>
            <h2 className="gold-rule mt-4 font-display text-3xl font-extrabold leading-tight text-primary sm:text-[2.4rem]">
              An integrated project approach, delivered end to end.
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-muted-foreground">
              We approach each project as one connected system — not isolated tasks — ensuring every
              moving part works together from the start.
            </p>
          </motion.div>

          <div className="mt-10 space-y-5">
            {BADGES.map((b, i) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.1 * i }}
                className="group flex items-center gap-5"
              >
                <div className="clip-hept-sm flex h-20 w-20 shrink-0 items-center justify-center bg-surface-strong transition-colors duration-500 group-hover:bg-accent-soft">
                  <b.Icon
                    className="h-7 w-7 text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent-deep"
                    strokeWidth={1.6}
                  />
                </div>
                <div className="flex-1 border-b border-border pb-5 transition-colors duration-500 group-hover:border-accent">
                  <p className="font-display text-lg font-bold text-primary">{b.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
