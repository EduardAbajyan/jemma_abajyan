import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media", // or "class" if you want manual toggling
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        armenian: ["var(--font-armenian)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;