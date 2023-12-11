// playwright.config.js

module.exports = {
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['allure-playwright', ['json', { outputDir: 'allure-results/result.json' }]]
  ],
};
