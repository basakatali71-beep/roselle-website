type GradientBackgroundProps = {
  variant?: "hero" | "soft" | "dark";
  className?: string;
};

export default function GradientBackground({
  variant = "soft",
  className = "",
}: GradientBackgroundProps) {
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-rose-radial" />
        <div className="absolute -left-32 top-10 h-96 w-96 animate-blob rounded-full bg-rose-300/40 blur-3xl" />
        <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] animate-blob rounded-full bg-lavender-300/30 blur-3xl [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 animate-blob rounded-full bg-rose-200/50 blur-3xl [animation-delay:4s]" />
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-plum-900 via-[#3A1728] to-rose-800" />
        <div className="absolute left-1/4 top-0 h-96 w-96 animate-blob rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 animate-blob rounded-full bg-lavender-400/20 blur-3xl [animation-delay:3s]" />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-50" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 animate-blob rounded-full bg-rose-200/40 blur-3xl" />
      <div className="absolute -right-16 bottom-10 h-80 w-80 animate-blob rounded-full bg-lavender-300/25 blur-3xl [animation-delay:2.5s]" />
    </div>
  );
}
