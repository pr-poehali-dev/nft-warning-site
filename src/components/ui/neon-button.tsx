import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref,
  ) => {
    const baseClasses =
      "relative font-orbitron font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyber-cyan/50";

    const variants = {
      primary:
        "bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark neon-border animate-cyber-glow",
      secondary:
        "bg-transparent border-2 border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-cyber-dark",
      ghost: "bg-transparent text-cyber-cyan hover:bg-cyber-cyan/10",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

NeonButton.displayName = "NeonButton";

export default NeonButton;
