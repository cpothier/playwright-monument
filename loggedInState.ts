import test, { expect } from "@playwright/test";


  test("Login", async ({ page }) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('#inventory_container').nth(0)).toBeVisible();

    await page.context().storageState( { path: "./LoginStandardUser.json"});

  });
