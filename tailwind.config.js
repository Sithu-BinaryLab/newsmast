/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        'banner-1': '2202/745',
        'banner': '16/5',
        'thumbnail': '129/47',
        'thumbnail-event': '384/210',
        'thumbnail-event-showcase': '487/327',
        'thumbnail-banner': '413/220',
        'thumbnail-post': '390/296',
        'logo': '1017/1010',
      },
      colors:{
        "newsmast-light-grey": "#F8F8F8",
        "newsmast-very-light-blue": "#F2F7FC",
        "newsmast-light-blue": "#F3F6FF",
        "newsmast-blue-grey": "#DCE0EB",
        "newsmast-grey": "#96A6C2",
        "newsmast-grey-2": "#9299A3",
        "newsmast-grey-3": "#6D7587",
        "newsmast-dark-blue": "#364663",
        "newsmast-black-lighter": "#2C2D2F",
        "newsmast-purple": "#735BF2",
        "newsmast-primary": "#2D74FF",
        "newsmast-light-blue-2": "#4D9FFF",
        "newsmast-error": "#D02828",
        "newsmast-green": "#2DE1A0",
        "newsmast-tab-grey": "#F1F4F8",
        "newsmast-dark-grey": "#42454F",
        "newsmast-dark-light": "#ACB0B9",
        "newsmast-error-2": "#FF8C8C",
      }
    },
  },
  plugins: [],
}