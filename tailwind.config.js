/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ✅ busca clases dentro de src/
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bebas Neue"', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        gradient: "gradient 8s ease infinite",
        blink: "blink 1.4s ease-in-out infinite", 
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: { 
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
