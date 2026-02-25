import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl p-6",
        "bg-[var(--background-elevated)] border border-[var(--border)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1",
        "hover:border-[var(--plum-700)]",
        "hover:shadow-[0_0_32px_-4px_var(--plum-700)]",
        className
      )}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-[var(--plum-900)]/60 border border-[var(--plum-700)]/40 flex items-center justify-center transition-colors duration-300 group-hover:border-[var(--plum-500)]/60">
        <Icon size={20} className="text-[var(--plum-400)]" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-[var(--foreground)] leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Subtle inner glow on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 30% 20%, var(--plum-900) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
