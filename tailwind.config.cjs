/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1280px',
      xl: '1676px',
    },
    extend: {
        colors: {
          primary: '#161515',
          benefit: '#C7EEFF',
          testimonial: '#FAFAFA',
          footer: '#1D242B',
          accent: {
            DEFAULT: '#0077C0',
            hover: '#005f99',
          },
          body: '#FFFFFF',
        },
    },
  },
  plugins: [],
};
