"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionReveal from "@/components/section-reveal";

export default function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    /* TODO: wire up real form action / email service */
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--plum-900) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading + direct contact */}
          <SectionReveal>
            <p className="text-xs font-medium tracking-widest uppercase text-[var(--plum-400)] mb-3">
              {t("heading").split("\n")[0]}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight leading-tight mb-4">
              {t("heading").split("\n").map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
            <p className="text-[var(--foreground-muted)] text-base leading-relaxed mb-8">
              {t("subheading")}
            </p>

            <div className="flex flex-col gap-3">
              <p className="text-xs text-[var(--foreground-muted)] uppercase tracking-widest">
                {t("or")}
              </p>
              <a
                href={`mailto:${t("email_direct")}`}
                className="inline-flex items-center gap-2 text-[var(--plum-400)] hover:text-[var(--plum-400)]/80 transition-colors font-medium"
              >
                <Mail size={16} />
                {t("email_direct")}
              </a>
            </div>
          </SectionReveal>

          {/* Right — form */}
          <SectionReveal delay={0.15}>
            {status === "success" ? (
              <div className="rounded-xl border border-[var(--plum-700)] bg-[var(--plum-900)]/40 p-8 text-center flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--plum-700)]/40 flex items-center justify-center">
                  <Send size={18} className="text-[var(--plum-400)]" />
                </div>
                <p className="text-[var(--foreground)] font-medium">{t("success")}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--background-elevated)] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[var(--foreground-muted)]">
                    {t("name_label")}
                  </label>
                  <Input
                    required
                    name="name"
                    placeholder={t("name_placeholder")}
                    className="bg-[var(--background)] border-[var(--border)] focus-visible:ring-[var(--plum-500)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[var(--foreground-muted)]">
                    {t("email_label")}
                  </label>
                  <Input
                    required
                    type="email"
                    name="email"
                    placeholder={t("email_placeholder")}
                    className="bg-[var(--background)] border-[var(--border)] focus-visible:ring-[var(--plum-500)] text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium text-[var(--foreground-muted)]">
                    {t("message_label")}
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    placeholder={t("message_placeholder")}
                    className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-muted)]/50 outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum-500)] resize-none transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-1 bg-[var(--plum-600)] hover:bg-[var(--plum-500)] text-white border-0 w-full h-11 font-medium transition-all duration-200 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={15} />
                      {t("submit")}
                    </span>
                  )}
                </Button>
              </form>
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
