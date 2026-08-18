import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const SECTIONS: Record<string, { title: string; intro: string; points?: string[] }> = {
  Overview: {
    title: "Overview",
    intro:
      "Alkokab Tech Solutions is a multidisciplinary company built around execution. Headquartered in Dubai, we work actively across GCC and African markets — especially East Africa — combining technical, commercial and operational services under one roof. Our work spans IT transformation, trade, sourcing, logistics, supply chain finance, consulting, marketing and events.",
    points: [
      "We have delivered projects that pair digital systems with hands-on, on-the-ground implementation, particularly in public sector and institutional settings.",
      "A flagship engagement saw us support the implementation of a biometrically integrated payroll management system in South Sudan, delivered under the wider IFMIS expansion programme financed by the World Bank.",
      "Within this work we supported the deployment of biometric devices, large-scale data collection for civil servants, and training of personnel across the registration processes.",
    ],
  },
  "Management Team": {
    title: "Management Team",
    intro:
      "Our management team brings together experienced leaders across technology, trade, finance and operations. Every engagement is steered by people who combine deep sector knowledge with hands-on delivery experience, keeping decisions grounded in the realities of project execution and client outcomes.",
    points: [
      "Multidisciplinary leadership across the full project lifecycle.",
      "Direct ownership of delivery — from planning and sourcing through to execution and follow-through.",
      "A track record of coordinating capability across international markets.",
    ],
  },
  "Board of Directors": {
    title: "Board of Directors",
    intro:
      "Our board provides strategic oversight across the company's regional ambitions, guiding long-term direction, governance and risk management. It draws on experience across international markets, public sector engagement and large-scale delivery, keeping the business aligned with the needs of clients and partners.",
    points: [
      "Governance and oversight for every major engagement.",
      "Guidance across GCC and African markets with a focus on real-world delivery.",
      "Stewardship of the company's values, growth and partnerships.",
    ],
  },
  "Our Presence": {
    title: "Our Presence",
    intro:
      "Headquartered in Dubai, our operations extend across GCC and African markets, with a strong footprint in East Africa and active engagement across multiple countries. Through international partnerships we support coordinated, multi-country delivery — combining regional understanding with global reach.",
    points: [
      "Dubai headquarters with a regional delivery network.",
      "Active projects across the GCC and Africa.",
      "Coordinated, multi-country execution through international partnerships.",
    ],
  },
  Careers: {
    title: "Careers",
    intro:
      "We are always looking for talented people who thrive on execution — professionals across technology, trade, logistics and finance who want to turn complex initiatives into delivered projects. Join a multidisciplinary team working on real-world projects across GCC and African markets.",
    points: [
      "Multidisciplinary roles across technology, trade, sourcing and logistics.",
      "Work on large-scale projects that make a measurable difference.",
      "A collaborative environment built around delivery and follow-through.",
    ],
  },
};

type AboutModalProps = {
  open: boolean;
  section: string | null;
  onClose: () => void;
};

export function AboutModal({ open, section, onClose }: AboutModalProps) {
  const data = section ? SECTIONS[section] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && data && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label={data.title}
        >
          <motion.div
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative w-full max-w-2xl overflow-hidden border border-border bg-card shadow-lift"
          >
            <span className="block h-[3px] w-full bg-gold" />
            <button
              onClick={onClose}
              aria-label="Close"
              className="group absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-all duration-300 hover:rotate-90 hover:border-accent hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="max-h-[70vh] overflow-y-auto p-7 lg:p-10">
              <span className="eyebrow text-accent-deep">
                About Us
              </span>
              <h3 className="gold-rule mt-5 font-display text-2xl font-extrabold text-primary lg:text-[2rem]">
                {data.title}
              </h3>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">{data.intro}</p>
              {data.points && (
                <ul className="mt-6 space-y-4 border-t border-border pt-6">
                  {data.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-accent-deep" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
