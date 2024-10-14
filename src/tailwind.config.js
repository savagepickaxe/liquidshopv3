
 {import('tailwindcss/tailwind-config').TailwindConfig}

module.exports = {
  mode: 'jit',
  content: [
    './**/*.liquid',
    './**/*.html',
    './**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
