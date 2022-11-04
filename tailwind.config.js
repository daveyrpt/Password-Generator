/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'custom-green': '#10B981',
        'custom-background': '#1F2937',
        'custom-background-button': '#273549',
      },
    },
  },
  variants: {

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
