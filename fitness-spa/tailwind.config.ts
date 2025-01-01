import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red: "#FC2331",
        "active-red": "#F32331",
        "fadish-red": "#472B27",
        "darkish-bg": "#1D1D27",
        "fadish-dark-bg": "#36353A",
        "div-bg": "#4C4A57",
      },
    },
  },
  plugins: [],
} satisfies Config;
