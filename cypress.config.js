const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,   // Largura do viewport
    viewportHeight: 720, 
    baseUrl: 'https://www.narwalsistemas.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    GITHUB_TOKEN: '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', 
  },
});
