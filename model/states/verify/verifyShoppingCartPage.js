import { expect } from '@playwright/test';

export function verifyShoppingCartPage() {
    return async (page) => {
        await expect(page.locator('//h2[text()="Shopping Cart"]'), '').toBeVisible();
    };
}

export default { verifyShoppingCartPage };