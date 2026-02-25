import { useTranslations } from "next-intl";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/section-reveal";
import ServiceCard from "@/components/service-card";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <SectionReveal className="mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-6 h-px bg-[var(--plum-400)]" />
            <span
              className="text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--plum-400)]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t("label")}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {t("heading")}
            </h2>
            <p className="max-w-xs text-sm text-[var(--foreground-muted)] leading-relaxed sm:text-right shrink-0">
              {t("subheading")}
            </p>
          </div>
        </SectionReveal>

        {/* Ruled divider */}
        <div className="border-t border-[var(--border)] mb-0" />

        {/* Cards grid — no gaps, ruled lines between */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <SectionReveal key={service.key} delay={i * 0.07}>
              <ServiceCard
                icon={service.icon}
                title={t(`items.${service.key}.title`)}
                description={t(`items.${service.key}.description`)}
                index={i}
              />
            </SectionReveal>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="border-t border-[var(--border)]" />
      </div>
    </section>
  );
}
