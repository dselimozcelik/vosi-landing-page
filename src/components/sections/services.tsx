import { useTranslations } from "next-intl";
import { SERVICES } from "@/lib/constants";
import SectionReveal from "@/components/section-reveal";
import ServiceCard from "@/components/service-card";

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <SectionReveal className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--plum-400)] mb-3">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
            {t("heading")}
          </h2>
          <p className="max-w-lg mx-auto text-[var(--foreground-muted)] text-base leading-relaxed">
            {t("subheading")}
          </p>
        </SectionReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <SectionReveal key={service.key} delay={i * 0.08}>
              <ServiceCard
                icon={service.icon}
                title={t(`items.${service.key}.title`)}
                description={t(`items.${service.key}.description`)}
              />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
