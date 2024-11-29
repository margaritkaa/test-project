// test.js
const { test, expect } = require('@playwright/test');

test('Тест главной страницы', async ({ page }) => {
  // Открываем главную страницу
  await page.goto('http://localhost:3000');

  // Проверяем, что на странице есть текст "Hello, World!"
  await expect(page).toHaveText('Hello, World!');
});
