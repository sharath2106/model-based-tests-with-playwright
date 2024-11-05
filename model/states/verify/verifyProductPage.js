import { expect } from '@playwright/test';

export function verifyProductPage() {
    return async (page) => {
        await expect(page.locator('table'), '').toBeVisible();
    };
}

export default { verifyProductPage };