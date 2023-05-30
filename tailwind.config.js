/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#12141D",
        paragraph2: "#FAFAFA",
        paragraph1: "#B7B8BB",
        white: "#ffffff",
        black: "#12141D",
        light_blue: "#0EA5E9",
        linear_gradient: "var(--color-gradient)",
      },
    },
  },
  plugins: [],
};
