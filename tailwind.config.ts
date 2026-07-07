import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // Main palette
        paper: "#F7F5F0",
        panel: "#FFFDF9",
        surface: "#FCFAF5",

        // Text
        ink: "#233042",
        "ink-soft": "#5F6C7B",
        muted: "#8A8F98",

        // Borders
        line: "#DDD7CB",

        // Accent
        amber: "#B8802F",
        "amber-tint": "#F3E7CF",

        success: "#4B8C62",
      },

      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },

      letterSpacing: {
        widest2: "0.22em",
      },

      boxShadow: {
        soft: "0 12px 40px rgba(35,48,66,0.08)",
      },

      animation: {
        fadein: "fadein .35s ease both",
      },

      keyframes: {
        fadein: {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },

  plugins: [],
};

export default config;