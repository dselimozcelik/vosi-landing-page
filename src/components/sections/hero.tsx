"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AuroraBackground from "@/components/aurora-background";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const t = useTranslations("hero");
  const reduced = useReducedMotion();

  const transition = (delay: number) => ({
    duration: reduced ? 0 : 0.6,
    ease: "easeOut" as const,
    delay: reduced ? 0 : delay,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <AuroraBackground />

      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">
        {/* Eyebrow badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.1)}
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[var(--plum-400)] border border-[var(--plum-700)] bg-[var(--plum-900)]/60 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--plum-400)] animate-pulse" />
            AI & Computer Vision
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.2)}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.08]"
        >
          {t("headline").split("\n").map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                line
              ) : (
                <span className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #c24e8a 0%, #9f1e63 50%, #d4a574 100%)",
                  }}
                >
                  {line}
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.35)}
          className="max-w-xl text-lg sm:text-xl text-[var(--foreground-muted)] leading-relaxed"
        >
          {t("tagline")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={transition(0.5)}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <Button
            asChild
            size="lg"
            className="bg-[var(--plum-600)] hover:bg-[var(--plum-500)] text-white border-0 px-7 h-12 text-sm font-medium shadow-lg shadow-[var(--plum-900)]/60 transition-all duration-200 hover:shadow-[var(--plum-700)]/60"
          >
            <a href="#contact" className="flex items-center gap-2">
              {t("cta_primary")}
              <ArrowRight size={16} />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[var(--border)] hover:border-[var(--plum-500)] bg-transparent hover:bg-[var(--plum-900)]/40 text-[var(--foreground)] px-7 h-12 text-sm font-medium transition-all duration-200"
          >
            <a href="#services">{t("cta_secondary")}</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduced ? 0 : 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[var(--foreground-muted)]"
      >
        <span className="text-xs tracking-widest uppercase opacity-60">Scroll</span>
        <ChevronDown size={16} className="animate-bounce opacity-60" />
      </motion.div>
    </section>
  );
}
