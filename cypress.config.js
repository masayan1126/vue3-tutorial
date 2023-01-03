const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9hmm3t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
