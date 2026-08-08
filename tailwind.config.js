/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#5B2A9D",
          purpleDeep: "#3D1A6E",
          purpleSoft: "#7C4DCB",
          navy: "#0F172A",
          navySoft: "#1E293B",
          light: "#F8F7FC",
          line: "#E7E2F2",
          muted: "#64607A",
        },
      },
    },
  },
  plugins: [],
};
