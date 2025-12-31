import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4A84B",
          dark: "#B8923F",
          light: "#E4C170",
        },
        secondary: {
          DEFAULT: "#B8D4E8",
          dark: "#8FBDD6",
          light: "#D6E8F2",
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-montserrat)", "sans-serif"],
        gothic: ["var(--font-zen-kaku)", "sans-serif"],
        "serif-display": ["var(--font-playfair)", "serif"],
      },
      spacing: {
        section: "80px",
        "section-md": "64px",
        "section-sm": "48px",
        content: "32px",
        element: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
