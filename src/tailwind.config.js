module.exports = {
  mode: 'jit', // Active le mode Just-In-Time de Tailwind pour générer les classes à la volée
  purge: [
    './**/*.liquid',  // Vérifie tous les fichiers Liquid
    './**/*.html',    // Vérifie tous les fichiers HTML
    './**/*.js',      // Vérifie tous les fichiers JavaScript
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}
