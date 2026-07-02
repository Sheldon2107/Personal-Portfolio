import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        panel: "#FFFFFF",
        ink: "#1C2430",
        "ink-soft": "#4A5568",
        muted: "#8A8F98",
        line: "#DEDAD0",
        amber: "#B8802F",
        "amber-soft": "#E9CFA2",
        "amber-tint": "#FBF3E6",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
