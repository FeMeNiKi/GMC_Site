import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-soft-lg",
  secondary:
    "bg-slate-900 text-white hover:bg-slate-800 shadow-soft hover:shadow-soft-lg",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
  ghost: "text-slate-700 hover:bg-slate-100",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm font-semibold",
  lg: "px-8 py-3.5 text-base font-semibold",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-60 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ariaLabel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
}
