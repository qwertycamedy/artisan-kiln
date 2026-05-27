import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1E8",
        navy: "#3D4B7A",
        terracotta: "#D2875C",
        sage: "#7FA38A",
        gold: "#D6B35A",
        ink: "#1F1F1F",
        border: "#2B2B2B",
      },
      fontFamily: {
        heading: ["var(--font-oswald)"],
        body: ["var(--font-inter)"],
      },
      boxShadow: {
        panel: "4px 4px 0px #1F1F1F",
      },
    },
  },
  plugins: [],
};

export default config;