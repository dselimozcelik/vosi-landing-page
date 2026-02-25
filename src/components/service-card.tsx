import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  className,
}: ServiceCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "group relative flex flex-col gap-5 p-6",
        "border-t border-[var(--border)]",
        "transition-all duration-300 ease-out",
        "hover:bg-[var(--background-elevated)]",
        className
      )}
    >
      {/* Number + icon row */}
      <div className="flex items-start justify-between">
        <span
          className="text-[11px] font-medium tracking-[0.15em] text-[var(--foreground-muted)]/50 group-hover:text-[var(--plum-400)]/70 transition-colors duration-300"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {num}
        </span>
        <div
          className="w-9 h-9 flex items-center justify-center rounded-sm border border-[var(--border)] group-hover:border-[var(--plum-700)] transition-colors duration-300"
          style={{ background: "var(--background)" }}
        >
          <Icon size={16} className="text-[var(--plum-400)]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-[15px] font-semibold text-[var(--foreground)] leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out"
        style={{ background: "linear-gradient(to right, var(--plum-500), transparent)" }}
      />
    </div>
  );
}
