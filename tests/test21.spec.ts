
import { test, expect } from "@playwright/test";

test("has title 21", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.waitForTimeout(5000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
