/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      PTChaser: ["PT-chaser", "sans-serif"],
      "PTGilroy-light": ["PT-gilroy-light", "sans-serif"],
      "PTGilroy-Bold": ["PT-gilroy-bold", "sans-serif"],
    },
    extend: {
      colors:{
        "gameJam-blue": "#4EFEF6",
        "gameJam-yellow": "#FCBC05",
      },
    },
    screens: {
      sm: "560px",
      md: "750px",
      lg: "1024px",
      xl: "1300px",
      "2xl": "1480px",
      smmin: { min: "376px", max: "426px" },
    },
  },
  plugins: [],
};
