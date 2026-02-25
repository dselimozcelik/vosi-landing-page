"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import VosiLogo from "@/components/vosi-logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const otherLocale = locale === "tr" ? "en" : "tr";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--background)]/85 backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between">
        <Link href="/" aria-label="Vosi home">
          <VosiLogo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-[13px] font-medium tracking-wide text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={pathname}
            locale={otherLocale}
            className="text-[11px] font-medium tracking-[0.15em] text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors px-2.5 py-1.5 border border-[var(--border)] hover:border-[var(--plum-600)] rounded-sm"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {otherLocale.toUpperCase()}
          </Link>
          <a
            href="#contact"
            className="text-[13px] font-medium text-white px-4 py-2 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{
              fontFamily: "var(--font-syne)",
              background: "linear-gradient(135deg, var(--plum-600) 0%, var(--plum-500) 100%)",
              boxShadow: "0 0 0 1px var(--plum-700)",
            }}
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--foreground-muted)] hover:text-[var(--foreground)] p-1 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16 }}
            className="md:hidden bg-[var(--background)]/98 backdrop-blur-xl border-b border-[var(--border)] px-4 pb-5"
          >
            <div className="flex flex-col pt-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors py-3 border-b border-[var(--border)]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-4">
                <Link
                  href={pathname}
                  locale={otherLocale}
                  className="text-[11px] font-medium tracking-widest text-[var(--foreground-muted)] px-2.5 py-1.5 border border-[var(--border)] rounded-sm"
                  style={{ fontFamily: "var(--font-syne)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {otherLocale.toUpperCase()}
                </Link>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white px-4 py-2 rounded-sm"
                  style={{
                    fontFamily: "var(--font-syne)",
                    background: "linear-gradient(135deg, var(--plum-600) 0%, var(--plum-500) 100%)",
                  }}
                >
                  {t("cta")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
