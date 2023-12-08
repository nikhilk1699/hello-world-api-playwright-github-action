// test.js

const { test, expect } = require('@playwright/test');

test('should return Hello, World!', async ({ page }) => {
  await page.goto('http://0.0.0.0:3000');
  const text = await page.innerText('body');
  expect(text).toBe('Hello, World!');
});

