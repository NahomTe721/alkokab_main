import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { Award, BadgeCheck, Globe2, ShieldCheck } from "lucide-react";
import reveal from "@/assets/apart-reveal.webp";
import techBg from "@/assets/k-tech-white-gold.webp";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Bold geometric "K" silhouette, single path, 100x100 viewBox. */
const K_PATH = "M14 6H35V42L66 6H92L57 50L94 94H66L35 60V94H14Z";

const CERTS = [
  { label: "ISO 27001", copy: "Information security management", Icon: ShieldCheck },
  { label: "ISO 9001", copy: "Quality management systems", Icon: BadgeCheck },
  { label: "Tier III Certified", copy: "Data centre design & operations", Icon: Award },
  { label: "Global Vendor Alliances", copy: "Authorised regional partner", Icon: Globe2 },
];

type LayerProps = {
  certsTextOpacity: MotionValue<number>;
  imageOpacity: MotionValue<number>;
};

/** The content revealed inside — and eventually beyond — the "K" portal. */
function PortalContent({ certsTextOpacity, imageOpacity }: LayerProps) {
  return (
    <div className="absolute inset-0">
      {/* Certifications layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary px-4 text-center sm:px-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.31_0.05_250)_0%,transparent_70%)]" />
        <motion.div
          style={{ opacity: certsTextOpacity }}
          className="relative w-full max-w-5xl"
        >
          <span className="eyebrow text-accent">What Sets Us Apart</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-[19px] font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Certified engineering, regional logistics and vendor access under one roof.
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-px border border-primary-foreground/15 bg-primary-foreground/15 sm:mt-12 lg:grid-cols-4">
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
          </div>
        </motion.div>
      </div>

      {/* Enterprise visual layer */}
      <motion.div style={{ opacity: imageOpacity }} className="absolute inset-0 bg-primary">
        <img
          src={reveal}
          alt="High-technology enterprise infrastructure visualisation"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/45" />
        <div className="absolute inset-x-0 bottom-12 px-6 text-center sm:bottom-16">
          <p className="mx-auto max-w-2xl font-display text-lg font-extrabold leading-snug text-primary-foreground sm:text-3xl">
            Enterprise-grade infrastructure, engineered and operated from Dubai.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/** Partner With Us content — the final animation frame (page 8) lands on this. */
function PartnerContent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center sm:gap-10">
      {/* Static, solid gold K with the blue ribbon */}
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
        Global vendors entering the Gulf and enterprises modernising their estate —
        our Dubai team maps the path forward.
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
 * the "Partner With Us" page (page 8) with the K emblem, then hands off to the
 * footer.
 */
export function MaskSequence() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Smooth scroll progression using a spring filter to eliminate scroll ticking stutters
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
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

  const scaleMax = isMobile ? 22 : 9;
  const shiftMax = isMobile ? 10 : 22;

  // Vector "K" clip scaled by transform — crisp at every size.
  const kScale = useTransform(smoothProgress, [0.05, 0.32, 0.7, 0.92], [1, scaleMax, scaleMax, 1]);
  const kInverse = useTransform(kScale, (v) => 1 / v);
  // Glide the shape so its solid stem, not the open notch, sits over the frame.
  const shift = useTransform(smoothProgress, [0.08, 0.3, 0.72, 0.9], [0, shiftMax, shiftMax, 0]);
  // Outer translate is not affected by the sibling scale, so pre-multiply it.
  const kShift = useTransform([shift, kScale], (vals) => {
    const [v = 0, s = 1] = vals as number[];
    return `${v * s}%`;
  });
  const kShiftBack = useTransform(shift, (v) => `${-v}%`);

  // Gold K outline framing the portal while it is small.
  const outlineOpacity = useTransform(smoothProgress, [0.1, 0.2, 0.88, 0.95], [1, 0, 0, 0]);

  // Once the K is wide, hand over to a full-bleed copy of the same content.
  const fullOpacity = useTransform(smoothProgress, [0.26, 0.38, 0.7, 0.82], [0, 1, 1, 0]);

  // Copy fades in only when the portal is wide enough to read it.
  const certsTextOpacity = useTransform(smoothProgress, [0.14, 0.3, 0.5, 0.58], [0, 1, 1, 0]);
  // Enterprise tech visual.
  const imageOpacity = useTransform(smoothProgress, [0.48, 0.58, 0.8, 0.9], [0, 1, 1, 0]);

  // White page the partner reveal lands on as the portal contracts.
  const partnerBgOpacity = useTransform(smoothProgress, [0.76, 0.9], [0, 1]);
  // Partner With Us content — the animation ends here, K emblem included.
  const partnerOpacity = useTransform(smoothProgress, [0.84, 0.95], [0, 1]);
  // Only let the layer catch clicks once the content is actually visible.
  const partnerPointer = useTransform(partnerOpacity, (v) => (v >= 0.5 ? "auto" : "none"));

  const layers = { certsTextOpacity, imageOpacity };

  return (
    <>
      <section id="apart" ref={ref} className="relative bg-background">
        <div className="h-[400vh]">
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
            <div className="absolute inset-0 bg-background/35" />

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
                  x: kShift,
                  clipPath: "url(#k-portal)",
                  WebkitClipPath: "url(#k-portal)",
                }}
                className="h-[15vmax] w-[15vmax]"
              >
                <motion.div style={{ x: kShiftBack }} className="h-full w-full">
                  <motion.div
                    style={{ scale: kInverse }}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <div className="relative h-screen w-screen shrink-0">
                      <PortalContent {...layers} />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Gold K outline framing the portal */}
            <motion.svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              style={{ opacity: outlineOpacity, scale: kScale, x: kShift }}
              className="pointer-events-none absolute left-1/2 top-1/2 -ml-[7.5vmax] -mt-[7.5vmax] h-[15vmax] w-[15vmax]"
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

            {/* Partner With Us — the animation ends here (page 8) */}
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

