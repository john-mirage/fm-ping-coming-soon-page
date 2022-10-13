/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "xs": "375px",
      "sm": "576px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
      "hover-device": { "raw": "(hover: hover)" },
    },
    colors: {
      "blue": "hsl(223, 87%, 63%)",
      "pale-blue": "hsl(223, 100%, 88%)",
      "light-red": "hsl(354, 100%, 66%)",
      "gray": "hsl(0, 0%, 59%)",
      "very-dark-blue": "hsl(209, 33%, 12%)",
      "transparent": "transparent",
    },
    spacing: {
      "0": "0px",
      "1": "0.0625rem",
      "2": "0.125rem",
      "4": "0.25rem",
      "6": "0.375rem",
      "8": "0.5rem",
      "10": "0.625rem",
      "12": "0.75rem",
      "14": "0.875rem",
      "16": "1rem",
      "20": "1.25rem",
      "22": "1.375rem",
      "24": "1.5rem",
      "28": "1.75rem",
      "32": "2rem",
      "36": "2.25rem",
      "40": "2.5rem",
      "44": "2.75rem",
      "48": "3rem",
      "52": "3.25rem",
      "56": "3.5rem",
      "60": "3.75rem",
      "64": "4rem",
      "68": "4.25rem",
      "72": "4.5rem",
      "76": "4.75rem",
      "80": "5rem",
      "84": "5.25rem",
      "88": "5.5rem",
      "92": "5.75rem",
      "96": "6rem",
      "128": "8rem",
    },
    fontWeight: {
      "700": "700",
    },
    fontSize: ({ theme }) => ({
      "display-lg": [theme("spacing[48]"), {
        lineHeight: theme("spacing[64]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
      "display-md": [theme("spacing[22]"), {
        lineHeight: theme("spacing[28]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
      "label-lg": [theme("spacing[20]"), {
        lineHeight: theme("spacing[24]"),
        letterSpacing: "0",
        fontWeight: "600",
      }],
      "label-md": [theme("spacing[12]"), {
        lineHeight: theme("spacing[16]"),
        letterSpacing: "0",
        fontWeight: "600",
      }],
      "label-sm": [theme("spacing[10]"), {
        lineHeight: theme("spacing[14]"),
        letterSpacing: "0",
        fontWeight: "600",
      }],
      "body-xl": [theme("spacing[20]"), {
        lineHeight: theme("spacing[24]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
      "body-lg": [theme("spacing[16]"), {
        lineHeight: theme("spacing[24]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
      "body-md": [theme("spacing[12]"), {
        lineHeight: theme("spacing[16]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
      "body-sm": [theme("spacing[10]"), {
        lineHeight: theme("spacing[14]"),
        letterSpacing: "0",
        fontWeight: "300",
      }],
    }),
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
