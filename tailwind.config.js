/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#211545",
        "secondary": "#056571",
        "success": "#5CB85C",
        "danger": "#DC3545",
        "warning": "#FFC107"
      },
    },
  },
  plugins: [],
}
