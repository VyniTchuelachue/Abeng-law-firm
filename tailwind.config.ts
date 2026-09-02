import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#06101F",
        "navy-secondary": "#0B1728",
        ivory: "#F5F1E8",
        gold: "#C9963E",
        "gold-light": "#DDB86A",
        burgundy: "#4A1217",
        muted: "#6F7680",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        signature: ["var(--font-signature)", "cursive"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
  plugins: [],
};
export default config;
