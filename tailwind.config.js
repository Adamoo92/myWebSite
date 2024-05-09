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
      colors: {
        ownBlack: "#0E0E0F",
        ownRed: {
          100: "#FFF2F3",
          200: "#FFDEE0",
          300: "#FFC7CB",
          400: "#FFB2B9",
          500: "#FF9CA4",
          600: "#FF8791",
          700: "#FF707C",
          800: "#FF5C69",
          900: "#FF4655",
        },
      },
    },
  },
  plugins: [],
};
