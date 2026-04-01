import { test, expect } from '@playwright/test';

test('Verify Hero and Pricing aesthetic changes', async ({ page }) => {
  // Increase timeout for server boot
  test.setTimeout(60000);

  await page.goto('http://localhost:3000');

  // Wait for load and framer motion animations
  await page.waitForTimeout(3000);

  // Capture Hero Section (Top)
  await page.screenshot({ path: 'verification/hero-glow.png', fullPage: false });

  // Scroll to Pricing section
  await page.evaluate(() => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  });

  await page.waitForTimeout(3000);

  // Focus the INR button
  const inrButton = page.getByRole('button', { name: 'INR' });
  await inrButton.focus();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/pricing-inr-focus.png' });

  // Tab to USD button
  await page.keyboard.press('Tab');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/pricing-usd-focus.png' });

  // Capture Pricing Section
  await page.screenshot({ path: 'verification/pricing-accents.png' });
});
