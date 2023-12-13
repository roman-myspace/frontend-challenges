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
        ipApp: {
          veryDarkGray: "hsl(0, 0%, 17%)",
          darkGray: "hsl(0, 0%, 59%)",
        },
        stepForm: {
          blue: {
            800: "hsl(213, 96%, 18%)",
            500: "hsl(243, 100%, 62%)",
            200: "hsl(228, 100%, 84%)",
            100: "hsl(206, 94%, 87%)",
          },
          red: "hsl(354, 84%, 57%)",
          neutral: {
            400: "hsl(231, 11%, 63%)",
            300: "hsl(229, 24%, 87%)",
            200: "hsl(217, 100%, 97%)",
            100: "hsl(231, 100%, 99%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
