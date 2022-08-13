/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [requir("@tailwindcss/forms"), requir("@tailwindcss/aspect-ratio")],
};
