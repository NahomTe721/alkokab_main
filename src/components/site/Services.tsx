import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Printer,
  Server,
  ShieldCheck,
  SunMedium,
  Truck,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  { label: "Cloud Services", Icon: Cloud, copy: "Advisory, migration and managed multi-cloud operations." },
  { label: "Technology Solutions", Icon: Cpu, copy: "End-user computing, collaboration and workplace platforms." },
  { label: "Logistics & Distribution", Icon: Truck, copy: "Bonded warehousing and regional fulfilment for IT hardware." },
  { label: "Enterprise AI", Icon: BrainCircuit, copy: "Applied AI, data engineering and intelligent automation." },
  { label: "Infrastructure", Icon: Server, copy: "Data centre, network and hybrid infrastructure builds." },
  { label: "Cyber Security", Icon: ShieldCheck, copy: "Zero-trust architecture, SOC services and compliance." },
  { label: "Digital Printing", Icon: Printer, copy: "Production print fleets, MPS and document workflow." },
  { label: "Solar & Energy", Icon: SunMedium, copy: "Rooftop and utility solar with monitoring and O&M." },
  { label: "Managed Support", Icon: Cpu, copy: "24/7 service desk, field engineering and SLA cover." },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent-deep">Our Services</span>
          <h2 className="gold-rule mt-4 font-display text-3xl font-extrabold text-primary sm:text-[2.6rem]">
            Capability across the full enterprise technology lifecycle.
          </h2>
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.a
              key={s.label}
              href="#contact"
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.08 + Math.floor(i / 3) * 0.06 }}
              className="group relative flex min-h-[228px] flex-col justify-between bg-card p-8 transition-colors duration-500 hover:bg-accent-soft"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              <s.Icon
                className="h-9 w-9 text-primary transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent-deep"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-display text-lg font-bold text-primary">{s.label}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">{s.copy}</p>
              </div>
              <ArrowUpRight className="absolute right-6 top-7 h-5 w-5 -translate-x-2 text-accent-deep opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
