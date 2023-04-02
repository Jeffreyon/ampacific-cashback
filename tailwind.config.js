/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FCFDFF",
          100: "#DBECFF",
          DEFAULT: "#00245B",
          900: "#00001F",
        },
        secondary: {
          DEFAULT: "#179F91",
          800: "#006355",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
