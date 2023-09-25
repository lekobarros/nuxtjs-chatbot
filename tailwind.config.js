/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        green: {
          default: '#38A169',
          50: '#F0FFF4',
          100: '#C6F6D5',
          200: '#9AE6B4',
          300: '#68D391',
          400: '#48BB78',
          500: '#38A169',
          600: '#2F855A',
          700: '#276749',
          800: '#22543D',
          900: '#1C4532'
        },
        gray: {
          100: '#EDF2F7',
          600: '#4A5568',
          800: '#1A202C',
          900: '#171923',
          2: '#4F4F4F',
          3: '#828282',
        },
      },
    },
  },
  plugins: [],
}

