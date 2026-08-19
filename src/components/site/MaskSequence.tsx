import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";
import { Award, Globe2, Handshake, Layers, Target } from "lucide-react";
import reveal from "@/assets/apart-reveal.webp";
import techBg from "@/assets/k-tech-white-gold.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Bold geometric "K" silhouette, single path, 100x100 viewBox. */
const K_PATH = "M14 6H35V42L66 6H92L57 50L94 94H66L35 60V94H14Z";

const CERTS = [
  { label: "Practical & Implementable Solutions", copy: "We prioritize approaches that can be executed effectively within real business environments.", Icon: Target },
  { label: "Single Coordinated Partner", copy: "Our broad capabilities allow clients to consolidate multiple requirements through one reliable partner.", Icon: Handshake },
  { label: "Reliable & Accountable Execution", copy: "We maintain clear coordination, disciplined delivery, and full accountability throughout every engagement.", Icon: Award },
  { label: "Flexible & Scalable Approach", copy: "Our solutions adapt to the size, sector, and complexity of each project.", Icon: Layers },
  { label: "Extensive Network", copy: "We connect clients with relevant suppliers, technical specialists, financial resources, and strategic partners.", Icon: Globe2 },
];

const SERVICES = [
  { title: "Technology Solutions", copy: "Comprehensive technology products, systems, and implementation support designed around institutional and business requirements." },
  { title: "Sourcing & Procurement", copy: "Identification, evaluation, and coordination of dependable suppliers for products, equipment, and project-specific needs." },
  { title: "Import & Export", copy: "Structured support for international trade activities, including supplier coordination, documentation, and cross-border movement of goods." },
  { title: "Supply Chain Finance", copy: "Financial solutions designed to support procurement cycles, supplier payments, and operational liquidity." },
  { title: "Logistics & Delivery", copy: "Coordinated transportation, shipment, warehousing, and delivery services ensuring goods reach their destination efficiently and securely." },
  { title: "Consulting & Business Support", copy: "Practical advisory and operational support enabling organizations to make informed decisions and execute their objectives effectively." },
  { title: "Marketing & Communication", copy: "Branding, digital communication, and promotional services that strengthen market presence and stakeholder engagement." },
];

type LayerProps = {
  headingOpacity: MotionValue<number>;
  boxesOpacity: MotionValue<number>;
  imageOpacity: MotionValue<number>;
};

/** The content revealed inside — and eventually beyond — the "K" portal. */
function PortalContent({ headingOpacity, boxesOpacity, imageOpacity }: LayerProps) {
  return (
    <div className="absolute inset-0">
      {/* Certifications layer — Why Alkokab Tech */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary px-4 text-center sm:px-5">
        <img
          src={techBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        <motion.div style={{ opacity: headingOpacity }} className="relative w-full max-w-5xl">
          <span className="eyebrow text-accent">Why Alkokab Tech</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[19px] font-extrabold leading-tight text-primary-foreground sm:text-3xl lg:text-[2.6rem]">
            <span className="bg-gold bg-clip-text text-transparent">Technical</span>
            <span className="text-primary-foreground">,</span>{" "}
            <span className="bg-gold bg-clip-text text-transparent">commercial</span>{" "}
            <span className="text-primary-foreground">and</span>{" "}
            <span className="bg-gold bg-clip-text text-transparent">operational</span>{" "}
            <span className="text-primary-foreground">services coordinated into one continuous process.</span>
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-24 bg-gold" />
          <motion.div
            style={{ opacity: boxesOpacity }}
            className="mt-8 grid grid-cols-2 gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:mt-12 lg:grid-cols-5"
          >
            {CERTS.map((c) => (
              <div
                key={c.label}
                className="flex flex-col items-center gap-2 bg-primary/90 px-2.5 py-5 sm:gap-3 sm:px-4 sm:py-7"
              >
                <c.Icon className="h-5 w-5 text-accent sm:h-7 sm:w-7" strokeWidth={1.5} />
                <span className="text-[11px] font-bold leading-snug text-primary-foreground sm:text-[12.5px]">
                  {c.label}
                </span>
                <span className="hidden text-[11.5px] leading-relaxed text-primary-foreground/70 sm:block">
                  {c.copy}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enterprise visual layer — Our Services */}
      <motion.div style={{ opacity: imageOpacity }} className="absolute inset-0 bg-primary">
        <img
          src={reveal}
          alt="Large-scale project delivery coordinated across systems and operations"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto px-4 py-10 text-center sm:px-8">
          <span className="eyebrow text-accent">Our Services</span>
          <h2 className="mx-auto mt-3 max-w-3xl font-display text-base font-extrabold leading-tight text-primary-foreground sm:text-2xl lg:text-3xl">
            Comprehensive solutions delivered across every stage of the project lifecycle.
          </h2>
          <div className="mt-6 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="flex flex-col items-start gap-2 border border-primary-foreground/15 bg-primary/60 px-5 py-5 text-left sm:px-6 sm:py-6"
              >
                <span className="font-display text-[11px] font-bold uppercase tracking-wider text-accent sm:text-xs">
                  {s.title}
                </span>
                <span className="text-[11px] leading-relaxed text-primary-foreground/75 sm:text-[12.5px]">
                  {s.copy}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** Partner With Us content — the final animation frame lands on this. */
function PartnerContent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center sm:gap-10">
      <img
        src="/logo.png"
        alt="Alkokab Tech Solutions logo"
        className="h-24 w-auto object-contain sm:h-32"
      />

      <h2
        className="font-display text-2xl font-extrabold tracking-[0.16em] sm:text-4xl"
        style={{ color: "#D4AF37" }}
      >
        PARTNER WITH US
      </h2>
      <p className="max-w-md text-center text-[14.5px] leading-relaxed text-muted-foreground">
        Governments, institutions and development partners — our Dubai team maps the path from
        initiative to delivered outcome.
      </p>
      <a
        href="#contact"
        className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-[12.5px] font-bold uppercase tracking-[0.14em] text-accent-foreground transition-transform duration-500 hover:-translate-y-0.5"
        style={{ transitionTimingFunction: `cubic-bezier(${EASE.join(",")})` }}
      >
        Contact Us
      </a>
    </div>
  );
}

/**
 * Scroll-driven gold "K" portal.
 * gold K on a white/gold tech field -> opens full-bleed (certifications ->
 * enterprise visual) -> single closing contraction -> the animation lands on
 * the "Partner With Us" page with the K emblem, then hands off to the footer.
 */
export function MaskSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Smoother scroll progression — lower stiffness for gentler transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 32,
    restDelta: 0.001,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 1024);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
    return undefined;
  }, []);

  const scaleMax = isMobile ? 18 : 7;

  // K zoom-in: starts earlier, completes sooner so the next page appears faster
  const kScale = useTransform(smoothProgress, [0.02, 0.25, 0.7, 0.97], [1, scaleMax, scaleMax, 1]);
  const kInverse = useTransform(kScale, (v) => 1 / v);

  // Gold K outline — fades out more gradually
  const outlineOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.88, 0.95], [1, 0, 0, 0]);

  // Full-bleed content takeover — starts right after K finishes opening
  const fullOpacity = useTransform(smoothProgress, [0.2, 0.35, 0.68, 0.8], [0, 1, 1, 0]);

  // Heading fades in after K starts zooming — not visible from the start
  const headingOpacity = useTransform(smoothProgress, [0.08, 0.2, 0.5, 0.6], [0, 1, 1, 0]);

  // Why Alkokab Tech — heading always visible, boxes pop in AFTER K fully opens
  const boxesOpacity = useTransform(smoothProgress, [0.28, 0.38, 0.52, 0.62], [0, 1, 1, 0]);

  // Our Services visual — stays visible much longer so client can read, then slow fade
  const imageOpacity = useTransform(smoothProgress, [0.55, 0.68, 0.82, 0.92], [0, 1, 1, 0]);

  // Partner reveal — comes in earlier, stays visible much longer before footer
  const partnerBgOpacity = useTransform(smoothProgress, [0.78, 0.88], [0, 1]);
  const partnerOpacity = useTransform(smoothProgress, [0.82, 0.9], [0, 1]);
  const partnerPointer = useTransform(partnerOpacity, (v) => (v >= 0.5 ? "auto" : "none"));

  // White overlay fades out as you scroll — more transparent during K transition
  const whiteOverlayOpacity = useTransform(smoothProgress, [0, 0.25], [0.35, 0]);

  const layers = { headingOpacity, boxesOpacity, imageOpacity };

  return (
    <>
      <section id="apart" ref={ref} className="relative bg-background">
        <div className="h-[800vh]">
          <div className="sticky top-0 h-screen overflow-hidden bg-background">
            {/* White + gold tech field behind the K */}
            <img
              src={techBg}
              alt=""
              aria-hidden="true"
              width={1920}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <motion.div style={{ opacity: whiteOverlayOpacity }} className="absolute inset-0 bg-background" />

            {/* Vector K clip path */}
            <svg aria-hidden="true" className="absolute h-0 w-0">
              <defs>
                <clipPath id="k-portal" clipPathUnits="objectBoundingBox">
                  <path d={K_PATH} transform="scale(0.01)" />
                </clipPath>
              </defs>
            </svg>

            {/* Full-bleed content: takes over once the K has opened wide */}
            <motion.div style={{ opacity: fullOpacity }} className="absolute inset-0">
              <PortalContent {...layers} />
            </motion.div>

            {/* Content clipped to the K silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                style={{
                  scale: kScale,
                  clipPath: "url(#k-portal)",
                  WebkitClipPath: "url(#k-portal)",
                }}
                className="h-[20vmax] w-[20vmax]"
              >
                <div className="h-full w-full">
                  <motion.div
                    style={{ scale: kInverse }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <div className="relative h-screen w-screen shrink-0">
                      <PortalContent {...layers} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Gold K outline framing the portal */}
            <motion.svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              style={{ opacity: outlineOpacity, scale: kScale }}
              className="pointer-events-none absolute left-1/2 top-1/2 -ml-[10vmax] -mt-[10vmax] h-[20vmax] w-[20vmax]"
            >
              <path
                d={K_PATH}
                fill="none"
                stroke="#D4AF37"
                strokeWidth={1.6}
                vectorEffect="non-scaling-stroke"
              />
            </motion.svg>

            {/* White page the portal settles on */}
            <motion.div
              style={{ opacity: partnerBgOpacity }}
              className="pointer-events-none absolute inset-0 bg-background"
            />

            {/* Partner With Us — the animation ends here */}
            <motion.div
              style={{ opacity: partnerOpacity, pointerEvents: partnerPointer }}
              className="absolute inset-0 flex items-center justify-center bg-background px-5"
            >
              <PartnerContent />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
