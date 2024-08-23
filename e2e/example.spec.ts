import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const discordAccordion = page.getByText('Discord');

  await discordAccordion.click();
  await page.waitForTimeout(5000);

  await expect(page).toHaveTitle(/Octopost/);
});
