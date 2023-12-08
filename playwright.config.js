// playwright.config.js

module.exports = {
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],
};
