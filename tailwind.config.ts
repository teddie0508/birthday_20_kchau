import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["*.{html,js,ts}"],
  theme: {
    container: {
      center: true,
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
        lg: "1024px",
        "2xl": "1250px",
      },
    },

    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "26px",
      "3xl": "32px",
    },

    extend: {
      fontFamily: {
        fraunces: [
          "Fraunces",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        gelasio: [
          "Gelasio",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        roboto: [
          "Roboto",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],

        roboto_condensed: [
          "Roboto Condensed",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        "2xl": "1250px",
      },
      colors: {
        basic: "#171717",
        primary: "#ED1C24",
        secondary: {
          1: "#eee8de",
          2: "#DDC084",
        },
        neutral: {
          1: "#F5F5F5",
          2: "#E5E5E5",
          3: "#b2b2b2",
          4: "#555555",
          5: "#737373",
          6: "#404040",
          7: "#171717",
          8: "#222222",
          9: "#444444",
          p: "#555555",
        },
        backgr: "#f5f3ee",
      },
    },
  },
  plugins: [typography, containerQueries],
};

export default config;
