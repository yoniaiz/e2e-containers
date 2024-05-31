const fs = require("fs");
const path = require("path");

const getTestTemplate = (testNumber) => `
import { test, expect } from "@playwright/test";

test("has title ${testNumber}", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await page.waitForTimeout(5000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
`;

const testCount = 100;

for (let i = 1; i <= testCount; i++) {
  const testTemplate = getTestTemplate(i);
  fs.writeFileSync(
    path.join(__dirname, `tests/test${i}.spec.ts`),
    testTemplate
  );
}
