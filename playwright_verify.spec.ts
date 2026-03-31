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

  // Capture Pricing Section
  await page.screenshot({ path: 'verification/pricing-accents.png' });
});
