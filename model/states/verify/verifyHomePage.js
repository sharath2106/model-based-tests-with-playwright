import { expect } from '@playwright/test';

export function verifyHomePage() {
    return async (page) => {
        await expect(page.locator('div#MainImageContent'), '').toBeVisible();
    };
}

export default { verifyHomePage };