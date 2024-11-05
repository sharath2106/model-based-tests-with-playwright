# Model based testing with Playwright

Model based testing is using State machine library XState and the UI interactions can be achieved via any browser automation libraries like Playwright, Cypress and even Selenium. This repo has the example code which I demoed on `Using State Machines in Playwright` talk in `TestMu 2024`[https://www.lambdatest.com/testmuconf-2024/]. The video of the talk is available here - https://www.lambdatest.com/video/using-state-machines-with-playwright

## Intro

- Automates a simple pet store - https://petstore.octoperf.com/
- State machine, Model and Path Plans are available in `model.js`
- Contains States - `dog_page_states.js`, `fish_page_states.js`, `home_page_states.js`, `welcome_page_states.js` and Events - `fish_page_events.js`, `home_page_events.js`, `welcome_page_events.js` for the Model
- Constants, verifications are available in their respective directory
- Model, States and Events are used in the test - `app.spec.ts` residing under `tests` directory
- Use VS code extension `xstate-viz`[https://marketplace.visualstudio.com/items?itemName=dksedgwick.xstviz] to visualize the state machines under `statemachines` directory. Do make the changes in `playwright.config.ts` to point to the test `atm.spec.ts` and `google.spec.ts`. Follow instructions in vscode extension page to view the state machine.

> Use your own deligence in encapsulating and seggregating classes, variables and methods as some of them are written like a noob just for the demo purposes.

## Installation

Install the dependencies and run playwright tests

```sh
cd model-based-tests-with-playwright
npm install
npx playwright test
```