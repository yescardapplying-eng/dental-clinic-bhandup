import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12304A",
          50: "#F0F4F8",
          100: "#D9E3ED",
          200: "#B3C7DC",
          300: "#8DABCA",
          400: "#507FA8",
          500: "#2B5E87",
          600: "#1A4668",
          700: "#12304A",
          800: "#0D2235",
          900: "#081521",
        },
        teal: {
          DEFAULT: "#278C87",
          50: "#F0FAF9",
          100: "#E5F3F1",
          200: "#C2E6E2",
          300: "#91D4CD",
          400: "#58BCB2",
          500: "#278C87",
          600: "#1E706C",
          700: "#175653",
          800: "#124240",
          900: "#0C2B29",
        },
        mint: {
          light: "#E5F3F1",
          DEFAULT: "#D3ECE9",
        },
        surface: {
          offwhite: "#F7F9FC",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(18, 48, 74, 0.04), 0 1px 2px -1px rgba(18, 48, 74, 0.04)",
        card: "0 2px 8px -2px rgba(18, 48, 74, 0.06), 0 4px 16px -4px rgba(18, 48, 74, 0.04)",
        elevated: "0 8px 24px -6px rgba(18, 48, 74, 0.08), 0 4px 12px -2px rgba(18, 48, 74, 0.04)",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};

export default config;

