/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/*.html",
    // "./src/*.{html}",
  ],
  theme: {
    extend: {
      fontFamily:{
        PlusJakartaSans: ['"Plus Jakarta Sans"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

