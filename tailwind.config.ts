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
      animation: {
        blinkdot1: 'blink 2s linear infinite',
        blinkdot2: 'blink 2s linear 0.3s infinite',
        blinkdot3: 'blink 2s linear 0.6s infinite',
      },
      keyframes: {
        blink: {
          '0%': { opacity: '0' },
          "20%": { opacity: "1"},
          '40%': {opacity: '1'},
          '60%': {opacity: '1'},
          '100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [
    tailwindAnimated
  ],
};
export default config;
