test('Перевірка форми входу', async ({ page }) => {
  // Замінимо URL на неправильний
  await page.goto('http://localhost:3000/nonexistentpage'); // Це викликає помилку при тестуванні

  // Заповнення форми залишається тим самим
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');

  // Перевірка неправильного URL
  await expect(page).toHaveURL('http://localhost:3000/');  // Цей тест не пройде, бо сторінка не існує
});

