import { cn } from "@/lib/utils";

interface VosiLogoProps {
  className?: string;
}

export default function VosiLogo({ className }: VosiLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        className
      )}
    >
      {/* Geometric eye mark — a diamond with an inner circle, referencing "vision" */}
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M11 1L21 11L11 21L1 11L11 1Z"
          stroke="url(#logo-grad)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="11" cy="11" r="3" fill="url(#logo-grad)" />
        <defs>
          <linearGradient id="logo-grad" x1="1" y1="1" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c24e8a" />
            <stop offset="1" stopColor="#9f1e63" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      <span
        className="font-display font-700 text-[17px] tracking-[-0.02em] text-[var(--foreground)] leading-none"
        style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
      >
        vosi
      </span>
    </span>
  );
}
