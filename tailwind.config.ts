import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#050816",
        webred: "#E11D48",
        arcblue: "#00E5FF",
        venom: "#7C3AED",
        pulse: "#22C55E",
        steel: "#94A3B8"
      },
      boxShadow: {
        neon: "0 0 32px rgba(0,229,255,.24), 0 0 64px rgba(225,29,72,.16)",
        redglow: "0 0 34px rgba(225,29,72,.34)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
