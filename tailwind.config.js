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
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d946ef",
          secondary: "#67e8f9",
          accent: "#a855f7",
          neutral: "#1D1820",
          "base-100": "#1f2937",
          info: "#60a5fa",
          success: "#5BD7BC",
          warning: "#E08610",
          error: "#EE3F53",
        },
      },
    ],
  },
};
