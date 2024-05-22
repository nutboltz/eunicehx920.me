import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: ["./pages/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", ...fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
