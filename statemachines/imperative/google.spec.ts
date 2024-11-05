import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to Google
        await page.goto('https://www.google.com');

        // Accept Google's privacy policy (if it appears)
        const acceptButton = await page.locator('//*[text()="Accept all"]');
        if (await acceptButton.count() > 0) {
            await acceptButton.click();
        }
    });

    test('Valid search should show results', async ({ page }) => {
        // Perform a valid search
        await page.fill('textarea[name="q"]', 'Playwright');
        await page.press('textarea[name="q"]', 'Enter');

        // Wait for the results page to load and display the results
        await page.waitForSelector('h3');
        const results = await page.locator('h3');
        expect(await results.count()).toBeGreaterThan(0);
        console.log('Valid search results displayed.');
    });

    test('Invalid search should show no results', async ({ page }) => {

        const invalidText = 'sdafsdafasdflkj1u24oiu124';
        await page.fill('textarea[name="q"]', invalidText);
        await page.press('textarea[name="q"]', 'Enter');

        // Wait for the results page to load
        const noResultsText = await page.locator('//*[text()[contains(.,"did not match any documents.")]]');
        await expect(noResultsText).toBeVisible();
        console.log('Invalid search results displayed.');
    });
});