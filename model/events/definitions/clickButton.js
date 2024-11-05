export function clickButton(element) {
    return async (page) => {
        await page.locator(element).click();
    };
}

export default { clickButton };
