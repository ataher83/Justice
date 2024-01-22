/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {},
        backgroundImage: {
          'banner-image':
            "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('images/banner.png')",
        },
      },
    },
    plugins: [],
  }