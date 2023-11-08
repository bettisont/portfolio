/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // This will include all files in the app directory
    "./app/components/**/*.{js,ts,jsx,tsx}", // This includes files in the components subdirectory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

