/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "15px",
  },
  screens: {
    "sm": "640px",
    "md": "768px",
    "lg": "960px",
    "xl": "1200px",
  },
  fontFamily: {
    primary: "var(--font-JetBrainsMono)",
  },
  extend: {
    colors: {
      primary: "#1c1c22",
      accent: {
        DEFAULT: "#00FF99",
        hover: "#1c6f50"
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
};
export const plugins = [require("tailwindcss-animate")];