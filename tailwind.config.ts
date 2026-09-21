import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f4f7fa",
          100: "#e6edf4",
          200: "#cbd9e7",
          300: "#9fb5ca",
          400: "#58728d",
          500: "#0A2540",
          600: "#081d33",
          700: "#06172a",
          800: "#04111f",
          900: "#020b14",
        },
        secondary: {
          50: "#fffaf0",
          100: "#f9edc9",
          200: "#f2d98f",
          300: "#e8c45c",
          400: "#D4A017",
          500: "#D4A017",
          600: "#b9890f",
          700: "#956d0b",
          800: "#725208",
          900: "#4f3906",
        },
        success: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
        },
        navy: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        brand: {
          navy: "#0f172a",
          "navy-light": "#1e293b",
          gold: "#D4A017",
          "gold-light": "#e8bd49",
          white: "#ffffff",
          cream: "#f8fafc",
          primary: "#0A2540",
          secondary: "#D4A017",
          success: "#10b981",
        },
      },
      fontFamily: {
        sans: ["Segoe UI", "system-ui", "-apple-system", "sans-serif"],
        display: ["Segoe UI", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #0A2540 0%, #12385f 55%, #081d33 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #0A2540 0%, #12385f 60%, #081d33 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4A017 0%, #e8bd49 100%)",
        "brand-gradient": "linear-gradient(135deg, #0A2540 0%, #12385f 100%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      boxShadow: {
        premium: "0 4px 24px rgba(15, 23, 42, 0.08)",
        "premium-lg": "0 8px 40px rgba(15, 23, 42, 0.12)",
        gold: "0 4px 20px rgba(245, 158, 11, 0.3)",
        glass: "0 8px 32px rgba(15, 23, 42, 0.1)",
        glow: "0 0 40px rgba(10, 37, 64, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
