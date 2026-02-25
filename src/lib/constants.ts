import {
  Eye,
  Image,
  BrainCircuit,
  Code2,
  BarChart3,
  Lightbulb,
} from "lucide-react";

export const NAV_LINKS = [
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export const SERVICES = [
  { key: "cv", icon: Eye },
  { key: "image", icon: Image },
  { key: "ai_apps", icon: BrainCircuit },
  { key: "fullstack", icon: Code2 },
  { key: "data", icon: BarChart3 },
  { key: "consulting", icon: Lightbulb },
] as const;
