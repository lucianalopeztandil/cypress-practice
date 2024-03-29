const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n7hjgp',
  defaultCommandTimeout: 6000,
  env:{
    url: "https://rahulshettyacademy.com/"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/examples/*.*"
  },
});
