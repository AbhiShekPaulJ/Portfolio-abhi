// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/skipper-ui/**/*.{js,jsx}", // 👈 Add this line
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'], // 👈 Add this line
        },
      },
    },
    plugins: [],
  }