import { expect } from '@playwright/test';

export function verifyProductItemPage() {
    return async (page) => {
        await expect(page.locator('tbody'), '').toBeVisible();
    };
}

export default { verifyProductItemPage };