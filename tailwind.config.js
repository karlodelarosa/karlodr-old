/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00D3E0'
      },
      keyframes: {
        blur: {
          '0%': { filter: "blur(15px)" },
          '100%': { filter: "blur(0px)" }
        },
      },
      animation: {
        'blur': 'blur 3s ease-in',
      },
    },
  },
  plugins: [],
}

