import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/site";

type Variant = "primary" | "outline" | "ghost";

interface WhatsAppButtonProps {
  message?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  size?: "default" | "lg";
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-sage-600 text-white hover:bg-sage-700 shadow-sm hover:shadow-md",
  outline:
    "border border-sage-600 text-sage-700 hover:bg-sage-50 bg-transparent",
  ghost: "text-sage-700 hover:bg-sage-100",
};

const sizes = {
  default: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function WhatsAppButton({
  message,
  variant = "primary",
  className,
  children,
  size = "default",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  );
}
