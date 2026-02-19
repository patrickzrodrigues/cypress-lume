const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e21gfh",
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // Função de configuração de eventos pode ser usada aqui, se necessário
      return config;
    },
    experimentalStudio: false,
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php",
  },
  env: {},
});
