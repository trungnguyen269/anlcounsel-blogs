import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const styles = {
  primary:
    "border border-beige bg-beige text-ink hover:border-beigeDark hover:bg-beigeDark",
  secondary:
    "bg-white text-accent hover:bg-accentSoft border border-accent/20",
  ghost:
    "bg-transparent text-accent hover:bg-accentSoft/60 border border-transparent"
};

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps & LinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold",
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
