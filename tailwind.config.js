/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#006ce9',
      'light-blue': '#18b6f6',
      'light-purple': '#ac7ff4',
      'dark-purple': '#713fc2',
      'dirty-black': '#1d2033',
      'dark-background': '#151934',
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ],
    },
  },
  plugins: [],
};
