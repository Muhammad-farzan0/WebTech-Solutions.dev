import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A1220",
          900: "#0B1220",
          800: "#0F1B33",
        },
        navy: {
          950: "#060D1E",
          900: "#0A1F44",
          800: "#0F2A5C",
          700: "#152F63",
        },
        blue: {
          600: "#2E5FA3",
          500: "#3E6FB0",
          400: "#5B8FCB",
        },
        sky: {
          400: "#6FB8EE",
          300: "#8FCBF5",
        },
        paper: {
          50: "#F7F9FC",
          100: "#EEF2F8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(10,31,68,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,31,68,0.06) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(111,184,238,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(111,184,238,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s step-start infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
