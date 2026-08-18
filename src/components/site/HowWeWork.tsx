import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const ITEMS = [
  {
    num: "01",
    title: "Client-Centric Engagement",
    copy: "Each assignment begins with a precise understanding of the client's objectives, constraints, and operating environment. Solutions are then tailored to meet the exact requirements of the engagement.",
  },
  {
    num: "02",
    title: "Coordinated Capabilities",
    copy: "We align technical, commercial, financial, and operational functions to ensure that all components of a project move in a synchronized and controlled manner.",
  },
  {
    num: "03",
    title: "End-to-End Support",
    copy: "Our involvement spans sourcing, procurement, logistics, implementation, coordination, and post-delivery support, ensuring continuity throughout the project lifecycle.",
  },
  {
    num: "04",
    title: "Trusted Partner Network",
    copy: "We collaborate with vetted suppliers, service providers, and strategic partners to deliver reliable, compliant, and high-quality execution.",
  },
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center"
        >
          <span className="eyebrow text-accent-deep">Our Approach</span>
          <h2 className="gold-rule mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-primary sm:text-[2.6rem]">
            How We Work
          </h2>
        </motion.div>

        <div className="relative mt-16 lg:mt-24">
          <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
            {ITEMS.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.08 * i }}
                className="group bg-card p-8 lg:p-10 transition-colors duration-500 hover:bg-accent-soft"
              >
                <span className="eyebrow text-accent-deep">{item.num}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-deep transition-all duration-500 group-hover:text-accent-deep">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
