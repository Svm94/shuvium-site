import { test, expect } from '@playwright/test';

test('Verify Custom UI Toggle Accessibility', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Navigate to pricing section
  const pricingSection = page.locator('#pricing');
  await pricingSection.scrollIntoViewIfNeeded();

  // Find the toggle group container
  const toggleGroup = page.locator('div[role="group"][aria-label="Select currency"]');
  await expect(toggleGroup).toBeVisible();

  // Find the buttons
  const inrButton = toggleGroup.getByRole('button', { name: 'INR' });
  const usdButton = toggleGroup.getByRole('button', { name: 'USD' });

  await expect(inrButton).toBeVisible();
  await expect(usdButton).toBeVisible();

  // Initial state (USD is active by default in the component)
  await expect(inrButton).toHaveAttribute('aria-pressed', 'false');
  await expect(usdButton).toHaveAttribute('aria-pressed', 'true');

  // Focus the USD button to verify focus styles are applied (we'll capture this in the screenshot)
  await usdButton.focus();

  // Take a screenshot of the toggle group
  await toggleGroup.screenshot({ path: '/home/jules/verification/toggle-group-focus.png' });

  // Click INR button and verify state changes
  await inrButton.click();
  await expect(inrButton).toHaveAttribute('aria-pressed', 'true');
  await expect(usdButton).toHaveAttribute('aria-pressed', 'false');

  // Take another screenshot after clicking
  await toggleGroup.screenshot({ path: '/home/jules/verification/toggle-group-clicked.png' });
});