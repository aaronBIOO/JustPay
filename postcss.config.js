/** @type {import('postcss').ProcessOptions} */
module.exports = {
    plugins: {
      "@tailwindcss/postcss": {
        config: './tailwind.config.ts',
      },
      autoprefixer: {},
    },
  };