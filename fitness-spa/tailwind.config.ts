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
        "fade-dark-bg": "#36353A",
        "fadish-dark": "#37383C",
        "div-bg": "#4C4A57",
        "fade-grey": "#464646",
        orange: "#FF662D",
        "fadish-brown": "#444444",
        yellow: "#FEC006",
        "fadish-grey": "#A0A0A1",
        "darkish-red": "#FD2331",
      },
    },
  },
  plugins: [],
} satisfies Config;
