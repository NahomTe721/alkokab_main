import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import team from "@/assets/about-team.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.95, ease: EASE }}
          className="relative"
        >
          <span className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-[3px] border-t-[3px] border-accent lg:block" />
          <img
            src={team}
            alt="Multidisciplinary team coordinating end-to-end project delivery from Dubai"
            width={1408}
            height={1104}
            loading="lazy"
            className="relative h-[380px] w-full object-cover shadow-lift lg:h-[520px]"
          />
          <div className="absolute -bottom-8 right-6 hidden bg-primary px-7 py-6 text-primary-foreground shadow-lift lg:block">
            <p className="font-display text-4xl font-extrabold text-accent">18+</p>
            <p className="eyebrow mt-1 text-primary-foreground/70">Years in the region</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          <span className="eyebrow inline-block border border-accent/60 bg-accent-soft px-4 py-2 text-accent-foreground">
            Who We Are
          </span>
          <h2 className="gold-rule mt-6 font-display text-3xl font-extrabold leading-tight text-primary sm:text-[2.6rem]">
            A multidisciplinary company built around execution.
          </h2>
          <p className="mt-7 text-[15.5px] leading-relaxed text-muted-foreground">
            We bring technical, commercial and operational services together under one roof —
            spanning IT transformation, trade, supply chain finance, sourcing, logistics,
            consulting, marketing and events — supporting clients across standalone service needs
            and larger project engagements.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            We have delivered projects that pair digital systems with hands-on, on-the-ground
            implementation, particularly in public sector and institutional settings. A flagship
            engagement saw us support the rollout of a biometrically integrated payroll management
            system in South Sudan, delivered under the wider IFMIS expansion programme financed by
            the World Bank — covering the deployment of biometric devices, large-scale civil servant
            data collection, and training of personnel across the registration processes.
          </p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
            With headquarters in Dubai, our work spans GCC and African markets, with a strong
            presence in East Africa and active engagement across multiple countries.
          </p>
          <a
            href="#apart"
            className="group mt-9 inline-flex items-center gap-3 border-2 border-primary px-7 py-3.5 text-[12.5px] font-bold uppercase tracking-[0.14em] text-primary transition-colors duration-500 hover:bg-primary hover:text-primary-foreground"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          >
            Explore More
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
