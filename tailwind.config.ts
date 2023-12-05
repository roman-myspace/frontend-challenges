import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "400px",
        xxs: "300px",
      },
      colors: {
        primary: {
          900: "	#00494d",
          500: "#26c0ab",
          400: "#9fe8df",
          300: "	#5e7a7d",
          200: "#7f9c9f",
          100: "	#c5e4e7",
          50: "#f4fafa",
        },
        countries: {
          darkBlue: "hsl(209, 23%, 22%)",
          veryDarkBlueBG: "hsl(207, 26%, 17%)",
          veryDarkBlueText: "hsl(200, 15%, 8%)",
          darkGray: "hsl(0, 0%, 52%)",
          lightGray: "hsl(0, 0%, 98%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
