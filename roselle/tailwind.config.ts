import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: "#FFF7F9",
          100: "#FFE9F0",
          200: "#FFD3E1",
          300: "#FFA9C5",
          400: "#FF7FAA",
          500: "#FF5C8D",
          600: "#F03B72",
          700: "#C6285C",
          800: "#9E1F4A",
          900: "#5C1030",
        },
        lavender: {
          300: "#D3BCF2",
          400: "#B98BDE",
          500: "#9C6BC7",
        },
        plum: {
          50: "#FBF5F7",
          200: "#E8D9E0",
          400: "#8A6C79",
          600: "#5C4450",
          800: "#37202B",
          900: "#22131A",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "rose-radial":
          "radial-gradient(120% 120% at 50% 0%, #FFF0F5 0%, #FFE1EC 45%, #FFC9DE 100%)",
        "rose-gradient": "linear-gradient(135deg, #FF9EC4 0%, #FF5C8D 50%, #C6285C 100%)",
        "rose-mesh":
          "radial-gradient(60% 60% at 20% 20%, rgba(255,158,196,0.35) 0%, rgba(255,158,196,0) 70%), radial-gradient(50% 50% at 85% 15%, rgba(185,139,222,0.3) 0%, rgba(185,139,222,0) 70%), radial-gradient(70% 70% at 50% 100%, rgba(255,92,141,0.25) 0%, rgba(255,92,141,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(198, 40, 92, 0.12)",
        "glass-lg": "0 20px 60px -10px rgba(198, 40, 92, 0.25)",
        glow: "0 0 60px rgba(255, 158, 196, 0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        blob: "blob 12s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%" },
          "34%": { borderRadius: "60% 40% 45% 55% / 55% 60% 40% 45%" },
          "67%": { borderRadius: "45% 55% 40% 60% / 35% 45% 55% 65%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
