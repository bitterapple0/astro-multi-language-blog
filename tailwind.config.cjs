/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: { // on top of the predefined screen sizes, we added one more breakpoint
        "xs": "475px"        
      },
      backgroundImage: {
        "footer-bubble": "url('/images/footer/footer-bubble.svg')",
      },
    },
    colors: { // we are limiting possible colours we can use 
      gray: {
        primary: "#f7f7f7",
        secondary: "#E2E8F0",
        dark: "#848884",
        darker: "#4A5568"
      },
      black: "#000000",
      orange: {
        primary:"#e86826",
        secondary: "#e9763a"
        },
      yellow: "#F4B32A",
      white: "#ffffff",
      beige: "#f1eae0",
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      hs: ["Kobe11", "sans-serif"],
    },
  },
  plugins: [],
};
