const { defineConfig } = require('cypress');
module.exports = defineConfig({
e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    // SCREENSHOT SETTINGS
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
  },
  // Reporter configuration
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportPageTitle: 'OrangeHRM Test Report',
    inlineAssets: true,
  },
video: true, // Record videos
videoUploadOnPasses: false, // Don't upload videos of passing tests
videosFolder: 'cypress/videos', // Videos save location
viewportWidth: 1280, // Set video dimensions
viewportHeight: 720,
});