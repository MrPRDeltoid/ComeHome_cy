const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: "https://www.comehome.com/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    execTimeout: 30000,
    taskTimeout: 30000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
  component: {
    
  }
});
