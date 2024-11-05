import { test, expect, Page } from '@playwright/test';
import { createMachine } from 'xstate';
import { createModel } from '@xstate/test';

let page: Page;

test.describe('Google Search Tests with XState Model', () => {
    const googleSearchMachine = createMachine({
        /** @xstate-layout N4IgpgJg5mDOIC5RQPYqgGzAZTAQwCcBjACwDoBLCLAYgAUBRAJQDEB5JgWQH1sGBBJgGEAEgG0ADAF1EoAA4pYFAC4UUAO1kgAHogCMADgBsZACwB2AJx6jAJgCsp2wGZ7RtwBoQAT0QuJZOZGEqZ6NpaO5s4RAL4xXqjoWLiEpJTUYPTM7FzcAJIAcgBq-AAyeQAivALC4tJaCkqqGlq6CIYmFtZ2ji5unj76znpkeq6htgaW5vYSEsZxCWiYOPjE5ARwAK4YyrAsKFvqEDRMDHwAKtWCopIySCCNKmqaD2225gZk8xLmfcbOKZeXztAwBSxdPS2WyWIymAzmUyLECJFYpdZkdQoJjbXawU7nBhXPg3Or3eSKZ4tN5+T7fMF-VwAoGDBAGEbOaHWZymSwGex6UzDOLxEBYiBwLSo5JrUgNSnNV6gNoAWiMwMQauR0tWqXIVCw8qaL1aiCcGoQtj05jIzkRllhLl5UXh2uWMr1ZE2sB2ewORwgRqpSp0Zvs9jIEQMwwFs2C9ksFuhEZ5Eg+dqMNmi8zdSV1GKxOJ9eKDitNCFM4cj9mjeljEnjidZsNGMx59j+9nblZFMSAA */
        id: 'googleSearch',
        initial: 'idle',
        states: {
            idle: {
                on: {
                    PERFORM_SEARCH: 'resultsFound',
                    PERFORM_INVALID_SEARCH: 'noResults',
                },
                meta: {
                    test: async () => {
                        await expect(page.url()).toContain('https://www.google.com');
                    },
                },
            },
            resultsFound: {
                on: {
                    RESET_SEARCH: 'idle',
                },
                meta: {
                    test: async () => {
                        await expect(page.locator('//h3[text()[contains(.,"Playwright: Fast and reliable")]]'), '').toBeVisible();
                    },
                },
            },
            noResults: {
                on: { RESET_SEARCH: 'idle' },
                description: "No results to display",
                meta: {
                    test: async () => {
                        const noResultsText = await page.locator('//*[text()[contains(.,"did not match any documents.")]]');
                        await expect(noResultsText).toBeVisible();
                    },
                },
            },
        },
    });

    const events = {
        PERFORM_SEARCH: async () => {
            const validSearchTerm = 'Playwright';
            await page.fill('textarea[name="q"]', validSearchTerm);
            await page.press('textarea[name="q"]', 'Enter');
        },
        PERFORM_INVALID_SEARCH: async () => {
            const invalidSearchTerm = 'sdafsdafasdflkj1u24oiu124';
            await page.fill('textarea[name="q"]', invalidSearchTerm);
            await page.press('textarea[name="q"]', 'Enter');
        },
        RESET_SEARCH: async () => {
            await page.goto('https://www.google.com');
        },
    }

    const testModel = createModel(googleSearchMachine, {
        events: events,
    });

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
    });

    test.beforeEach(async () => {
        await page.goto('https://www.google.com');
        const acceptButton = await page.locator('//*[text()="Accept all"]');
        if (await acceptButton.count() > 0) {
            await acceptButton.click();
        }
    });

    test.afterAll(async ({ browser }) => {
        await page.close();
    });


    const testPlans = testModel.getSimplePathPlans();
    testPlans.forEach((plan) => {
        plan.paths.forEach((path) => {
            test(path.description, async () => {
                await path.test(page);
            });
        });
    });
});