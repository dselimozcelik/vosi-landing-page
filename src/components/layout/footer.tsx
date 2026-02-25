import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter } from "lucide-react";
import VosiLogo from "@/components/vosi-logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--background)] overflow-hidden">
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 800,
          fontSize: "clamp(80px, 18vw, 200px)",
          lineHeight: 0.85,
          color: "transparent",
          WebkitTextStroke: "1px rgba(194,78,138,0.07)",
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        vosi
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 py-10 border-b border-[var(--border)]">
          <div className="flex flex-col gap-2">
            <VosiLogo />
            <p className="text-xs text-[var(--foreground-muted)] max-w-[200px] leading-relaxed mt-1">
              {t("footer.tagline")}
            </p>
          </div>

          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-[13px] font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors tracking-wide"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/vosi-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="https://linkedin.com/company/vosi-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://twitter.com/vosi_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Twitter size={15} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-5">
          <p className="text-[11px] text-[var(--foreground-muted)] tracking-wide">
            {t("footer.copyright")}
          </p>
          <p
            className="text-[11px] text-[var(--foreground-muted)]/50 tracking-[0.15em] uppercase"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Intelligent Software
          </p>
        </div>
      </div>
    </footer>
  );
}
