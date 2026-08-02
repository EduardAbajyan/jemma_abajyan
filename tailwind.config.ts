import type { Config } from "tailwindcss";

const config: Config = {
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
      spacing: {
        15: "3.75rem",
      },
      borderRadius: {
        base: "0.25rem",
      },
      fontFamily: {
        armenian: ["var(--font-armenian)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
