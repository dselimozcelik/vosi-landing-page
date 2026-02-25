"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import VosiLogo from "@/components/vosi-logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const otherLocale = locale === "tr" ? "en" : "tr";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Vosi home">
          <VosiLogo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
        </div>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <Link
            href={pathname}
            locale={otherLocale}
            className="text-xs font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors px-2 py-1 rounded border border-[var(--border)] hover:border-[var(--plum-500)]"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <Button
            asChild
            size="sm"
            className="bg-[var(--plum-600)] hover:bg-[var(--plum-500)] text-white border-0"
          >
            <a href="#contact">{t("cta")}</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[var(--foreground-muted)] hover:text-[var(--foreground)] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] px-4 pb-4"
          >
            <div className="flex flex-col gap-4 pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors py-1"
                >
                  {t(link.key)}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
                <Link
                  href={pathname}
                  locale={otherLocale}
                  className="text-xs font-medium text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors px-2 py-1 rounded border border-[var(--border)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {otherLocale.toUpperCase()}
                </Link>
                <Button
                  asChild
                  size="sm"
                  className="bg-[var(--plum-600)] hover:bg-[var(--plum-500)] text-white border-0"
                >
                  <a href="#contact" onClick={() => setMenuOpen(false)}>
                    {t("cta")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
