type RoselleLogoProps = {
  className?: string;
  withWordmark?: boolean;
};

/**
 * Roselle's signature mark — a five-petal bloom built from overlapping
 * rounded arcs, echoing both "rose" and the cyclical ring of a calendar.
 */
export default function RoselleLogo({
  className = "h-8 w-8",
  withWordmark = false,
}: RoselleLogoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="roselleMark" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFA9C5" />
            <stop offset="55%" stopColor="#F03B72" />
            <stop offset="100%" stopColor="#9C6BC7" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M24 24C24 24 24 8 15.5 8C9 8 7 14 12 18.5C16.2 22.2 24 24 24 24Z"
            fill="url(#roselleMark)"
            opacity="0.95"
          />
          <path
            d="M24 24C24 24 40 24 40 15.5C40 9 34 7 29.5 12C25.8 16.2 24 24 24 24Z"
            fill="url(#roselleMark)"
            opacity="0.85"
          />
          <path
            d="M24 24C24 24 24 40 32.5 40C39 40 41 34 36 29.5C31.8 25.8 24 24 24 24Z"
            fill="url(#roselleMark)"
            opacity="0.9"
          />
          <path
            d="M24 24C24 24 8 24 8 32.5C8 39 14 41 18.5 36C22.2 31.8 24 24 24 24Z"
            fill="url(#roselleMark)"
            opacity="0.8"
          />
          <circle cx="24" cy="24" r="6.5" fill="url(#roselleMark)" />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-display text-xl font-bold tracking-tight text-plum-900">
          Roselle
        </span>
      )}
    </div>
  );
}
