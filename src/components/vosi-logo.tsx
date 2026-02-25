import { cn } from "@/lib/utils";

interface VosiLogoProps {
  className?: string;
}

export default function VosiLogo({ className }: VosiLogoProps) {
  return (
    <span
      className={cn(
        "font-bold text-xl tracking-tight text-foreground select-none",
        className
      )}
    >
      <span className="text-[var(--plum-400)]">vo</span>si
    </span>
  );
}
