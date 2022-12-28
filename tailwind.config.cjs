/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  // purge: [
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx,vue}',
  // ],
  theme: {
    
    fontSize: {
      sx: 14,
      sm: 16,
      md: 18,
      lg: 24,
      xl: 24,
      xxl: 32
    },
    colors: {
      'black': "#000",
      'white': '#fff',
      'transparent': "transparent",
      yellow: {
        400: '#FACC15',
        500: '#FFED00'
      },
      grays: {
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#121214"
      },
      red: {
        600: "#DC2626"
      }
    },
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
    },
  },
  plugins: [],
}