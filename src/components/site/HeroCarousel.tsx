import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import hero1 from "@/assets/hero-1.webp";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.webp";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

const SLIDES = [
  { src: hero1, kicker: "Cloud & Data Centre", tagline: "Enterprise cloud engineered for the pace of Dubai business." },
  { src: hero2, kicker: "Regional Reach", tagline: "A Dubai-headquartered technology partner for the wider Gulf." },
  { src: hero3, kicker: "Digital Transformation", tagline: "Turning enterprise ambition into deployed technology outcomes." },
  { src: hero4, kicker: "Infrastructure", tagline: "Future-ready hardware, delivered, configured and supported." },
  { src: hero5, kicker: "Energy & Smart Sites", tagline: "Solar and smart infrastructure that lowers the cost of growth." },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 6200);
    return () => clearInterval(t);
  }, [index]);

  const slide = SLIDES[index]!;

  return (
    <section id="top" className="relative h-[86vh] min-h-[560px] w-full overflow-hidden bg-primary pt-20">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={slide.src}
          alt={slide.kicker}
          width={1920}
          height={1088}
          initial={ready ? { opacity: 0, scale: 1.08 } : false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.1, ease: EASE }, scale: { duration: 7, ease: "linear" } }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="hero-scrim absolute inset-0" />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.75, ease: EASE }}
            className="max-w-3xl"
          >
            <span className="eyebrow inline-flex items-center gap-2 text-accent">
              <span className="h-[2px] w-8 bg-gold" />
              {slide.kicker}
            </span>
            <h1 className="mt-5 font-display text-[1.9rem] min-[380px]:text-[2.3rem] font-extrabold leading-[1.02] text-primary-foreground sm:text-6xl lg:text-[4.6rem]">
              ALKOKAB
              <span className="block bg-gold bg-clip-text text-transparent">TECH SOLUTIONS</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              {slide.tagline}
            </p>
            <a
              href="/services"
              className="group mt-9 inline-flex items-center gap-3 bg-gold px-7 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-accent-foreground transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            >
              Discover Alkokab
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 left-5 flex items-center gap-3 lg:left-10">
          {SLIDES.map((s, i) => (
            <button
              key={s.kicker}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-[3px] w-12 overflow-hidden bg-primary-foreground/30"
            >
              <motion.span
                className="absolute inset-y-0 left-0 bg-gold"
                initial={false}
                animate={{ width: i === index ? "100%" : "0%" }}
                transition={{ duration: i === index ? 6 : 0.4, ease: "linear" }}
              />
            </button>
          ))}
          <span className="ml-3 font-display text-xs font-bold text-primary-foreground/70">
            0{index + 1} / 0{SLIDES.length}
          </span>
        </div>
      </div>
    </section>
  );
}
