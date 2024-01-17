import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'nav': "linear-gradient(0deg, #FFF 30.37%, rgba(255, 255, 255, 0.00) 100%)",
        'recruitment-text': 'linear-gradient(90deg, rgba(81, 182, 227, 0.98) 53.82%, #00C695 102.79%)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config