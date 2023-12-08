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
        text: "var(--text-color)",
        bg: "var(--bg-color)",
      },
      screens: {
        max1200: { max: "1200px" },
        max768: { max: "768px" },
        max600: { max: "600px" },
      },
    },
  },
  plugins: [],
};
