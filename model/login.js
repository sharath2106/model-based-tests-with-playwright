export function login() {
    return async (page) => {
        await page.waitForSelector("input[name='signon']");
        await page.locator("input[name='username']").fill("admin");
        await page.locator("input[name='password']").fill("admin");
        await page.locator("input[name='signon']").click();
    };
}

export default { login };