import { Page, test } from '@playwright/test';
import { PET_STORE_SHORTEST_PATH_PLANS } from '../model/model'
import { login } from '../model/login'

let page: Page;

test.describe('Petstore Tests with XState Model', () => {
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
  });

  test.afterAll(async ({ browser }) => {
    for (let context of browser.contexts())
      await context.close()
  });

  test.beforeEach(async () => {
    await page.goto('https://petstore.octoperf.com/');
    await login(page);
  });

  for (const plan of PET_STORE_SHORTEST_PATH_PLANS) {
    test.describe(`${plan.description}`, () => {
      for (const path of plan.paths) {
        test(`${path.description}`, async () => {
          test.skip(path.description === 'via ENTER_STORE → CLICK_FISH → SELECT_PRODUCT → ADD_TO_CART')
          await path.test(page);
        });
      }
    });
  }
});