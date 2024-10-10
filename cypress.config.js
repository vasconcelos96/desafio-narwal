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
