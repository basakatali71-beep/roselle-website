import { ReactNode, HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-4xl shadow-glass ${
        hover ? "transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glass-lg" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
