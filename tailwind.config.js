/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#ff61d2",
        "gradient-end": "#7b2cbf",
      },
    },
  },
  plugins: [],
};
