import type { Config } from "tailwindcss";
import tailwindAnimated from "tailwindcss-animated"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
      },
    },
  },
  plugins: [
    tailwindAnimated
  ],
};
export default config;
