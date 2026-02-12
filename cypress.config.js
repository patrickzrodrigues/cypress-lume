const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e21gfh",
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {},
    allowCypressEnv: false,

    experimentalStudio: false,
  },
  env: {},
});
