module.exports = {
  mode: 'jit', // Mode Just-In-Time pour générer les classes dynamiquement
  purge: [
    './**/*.liquid', // Inclure tous les fichiers Liquid
    './**/*.html',   // Inclure tous les fichiers HTML
    './**/*.js',     // Inclure tous les fichiers JavaScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
