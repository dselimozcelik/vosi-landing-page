import { useTranslations } from "next-intl";
import { Github, Linkedin, Twitter } from "lucide-react";
import VosiLogo from "@/components/vosi-logo";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-1">
            <VosiLogo />
            <p className="text-xs text-[var(--foreground-muted)] mt-1">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-xs text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vosi-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/company/vosi-ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://twitter.com/vosi_ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <p className="text-xs text-[var(--foreground-muted)] mt-8 text-center sm:text-left">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
