import { expect } from "@playwright/test";

export function verifyWelcomePage() {
    return async (page) => {
        await expect(page.locator('//h2[text()="Welcome to JPetStore 6"]'), '').toBeVisible();
    };
}

export default { verifyWelcomePage };