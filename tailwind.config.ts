import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D9991",
        "primary-dark": "#2d7a73",
        dark: "#1F1F1F",
        "gray-900": "#1a1a1a",
        "gray-800": "#2d2d2d",
        "gray-700": "#3d3d3d",
        "gray-600": "#666666",
        "gray-500": "#888888",
        "gray-400": "#aaaaaa",
        "gray-300": "#cccccc",
        "gray-200": "#e5e5e5",
        "gray-100": "#f5f5f5",
      },
      fontFamily: {
        sans: ["var(--font-proxima)", "system-ui", "sans-serif"],
        serif: ["var(--font-garamond)", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": "0.625rem",
      },
      letterSpacing: {
        wider: "0.1em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
