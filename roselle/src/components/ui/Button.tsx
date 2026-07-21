import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "bg-gradient-to-r from-rose-500 to-rose-700 text-white shadow-glass-lg hover:shadow-glow hover:from-rose-400 hover:to-rose-600",
  secondary:
    "glass text-plum-900 hover:bg-white/70 shadow-glass",
  ghost: "bg-transparent text-plum-900 hover:bg-rose-100/60",
  dark: "bg-plum-900 text-white hover:bg-plum-800 shadow-glass-lg",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-full",
  md: "px-6 py-3.5 text-[15px] gap-2 rounded-full",
  lg: "px-8 py-4 text-base gap-2.5 rounded-full",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out active:scale-[0.97] whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
