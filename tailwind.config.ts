import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        sage: {
          50: "#f4f7f4",
          100: "#e6ede6",
          200: "#cddcce",
          300: "#a8c2a9",
          400: "#7da07f",
          500: "#5c835f",
          600: "#48694b",
          700: "#3a543d",
          800: "#304433",
          900: "#28382b",
        },
        cream: {
          50: "#fdfaf6",
          100: "#faf4eb",
          200: "#f4e8d4",
          300: "#ebd5b3",
          400: "#dfbc88",
          500: "#d4a465",
        },
        slate: {
          950: "#0c1a1c",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
