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
        accent: "var(--accent-color)",
        accent2: "var(--accent-color2)",
        text: "var(--text-color)",
        bg: "var(--bg-color)",
        const: "var(--const)",
      },
      screens: {
        max1200: { max: "1200px" },
        max768: { max: "768px" },
        max600: { max: "600px" },
        max350: { max: "350px" },
      },
    },
  },
  plugins: [],
};
