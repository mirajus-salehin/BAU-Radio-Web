module.exports = {
  mode: "jit",
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-green": '#297880',
        "brand-dark": '#263238',
        "brand-black": "#204E52",
        "brand-green-lighter": "#86BAB6",
        "brand": {
          "50": "#112106105",
          "100": "#f3fbfb",
          "200": "#b6e3e8",
          "300": "#78cbd4",
          "400": "#3db0bd",
          "500": "#29777f",
          "600": "#216168",
          "700": "#1b4f55",
          "800": "#143a3e",
          "900": "#0c2427"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
