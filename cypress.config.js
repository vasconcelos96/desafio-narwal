require('dotenv').config(); 

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: 'https://www.narwalsistemas.com.br/',
    setupNodeEvents(on, config) {
      // Implementar ouvintes de eventos do Node aqui
    },
    env: {
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    },
  },
});

