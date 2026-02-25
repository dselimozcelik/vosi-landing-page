"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "@/components/aurora-background";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Hero() {
  const t = useTranslations("hero");
  const reduced = useReducedMotion();

  const tr = (delay: number) => ({
    duration: reduced ? 0 : 0.7,
    ease: "easeOut" as const,
    delay: reduced ? 0 : delay,
  });

  const headlineLines = t("headline").split("\n");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <AuroraBackground />

      {/* Ghost "AI" — decorative, top-right */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={tr(0.05)}
        aria-hidden="true"
        className="absolute top-16 right-4 sm:right-10 z-10 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontSize: "clamp(80px, 13vw, 180px)",
          fontWeight: 800,
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(194,78,138,0.10)",
          letterSpacing: "-0.04em",
        }}
      >
        AI
      </motion.div>

      {/* Centered content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 w-full py-32">

        {/* Eyebrow row */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={tr(0.1)}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-8 h-px bg-[var(--plum-400)]" />
          <span
            className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--plum-400)]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            AI & Computer Vision
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="text-[11px] tracking-widest text-[var(--foreground-muted)] font-mono opacity-50">
            v1.0
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10">
          {headlineLines.map((line, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={tr(0.18 + i * 0.12)}
            >
              <span
                className="block leading-[1.05]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  letterSpacing: "-0.025em",
                  color: i === 0 ? "var(--foreground)" : "transparent",
                  backgroundImage: i === 1
                    ? "linear-gradient(135deg, #c24e8a 0%, #9f1e63 55%, #d4a574 100%)"
                    : undefined,
                  WebkitBackgroundClip: i === 1 ? "text" : undefined,
                  backgroundClip: i === 1 ? "text" : undefined,
                  WebkitTextFillColor: i === 1 ? "transparent" : undefined,
                }}
              >
                {line}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tagline + CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={tr(0.44)}
            className="max-w-sm text-[15px] text-[var(--foreground-muted)] leading-relaxed"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={tr(0.54)}
            className="flex items-center gap-3 shrink-0"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-sm font-medium text-white rounded-sm transition-all duration-200 hover:opacity-90"
              style={{
                fontFamily: "var(--font-syne)",
                background: "linear-gradient(135deg, var(--plum-600) 0%, var(--plum-500) 100%)",
                boxShadow: "0 0 0 1px var(--plum-700), 0 8px 32px -8px var(--plum-900)",
              }}
            >
              {t("cta_primary")}
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center px-5 py-3 text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200 border border-[var(--border)] hover:border-[var(--plum-700)] rounded-sm"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t("cta_secondary")}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — pinned to bottom, independent of content */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={tr(0.9)}
        className="absolute bottom-8 left-4 right-4 sm:left-8 sm:right-8 max-w-6xl mx-auto z-20 flex items-center gap-4"
        style={{ left: "50%", transform: "translateX(-50%)", width: "calc(100% - 2rem)", maxWidth: "72rem" }}
      >
        <div className="h-px flex-1 bg-[var(--border)]" />
        <a
          href="#services"
          className="text-[10px] tracking-[0.25em] uppercase text-[var(--foreground-muted)] hover:text-[var(--plum-400)] transition-colors"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Scroll
        </a>
        <div className="w-6 h-px bg-[var(--plum-400)]" />
      </motion.div>
    </section>
  );
}
