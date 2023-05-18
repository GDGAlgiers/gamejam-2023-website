/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        PTChaser: ['PT-chaser', 'sans-serif'],
      },
    },
    screens: {
      sm: "560px",
      md: "750px",
      lg: "1024px",
      "2xl": "1480px",
      smmin: { min: "376px", max: "426px" },
    },
  },
  plugins: [],
};
