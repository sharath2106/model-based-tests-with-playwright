import { createMachine } from "xstate";
import { createModel } from "@xstate/test";
import { WELCOME_PAGE_EVENTS } from './events/welcome_page_events.js';
import { WELCOME_PAGE_STATES } from "./states/welcome_page_states";
import { HOME_PAGE_STATES } from "./states/home_page_states";
import { HOME_PAGE_EVENTS } from "./events/home_page_events";
import { WELCOME } from "./constants/state_ids";
import { FISH_PAGE_STATES } from "./states/fish_page_states";
import { FISH_PAGE_EVENTS } from "./events/fish_page_events";
import { DOG_PAGE_STATES } from "./states/dog_page_states";

const APP_ID = "JPetStore";
const PET_STORE_MACHINE = createMachine({
    id: APP_ID,
    initial: WELCOME,
    states: {
        ...WELCOME_PAGE_STATES,
        ...HOME_PAGE_STATES,
        ...FISH_PAGE_STATES,
        ...DOG_PAGE_STATES
    },
});

const PET_STORE_EVENTS = {
    ...WELCOME_PAGE_EVENTS,
    ...HOME_PAGE_EVENTS,
    ...FISH_PAGE_EVENTS
};

const PET_STORE_MODEL = createModel(PET_STORE_MACHINE).withEvents(
    PET_STORE_EVENTS,
);

export const PET_STORE_SHORTEST_PATH_PLANS = PET_STORE_MODEL.getSimplePathPlans();

export default {
    PET_STORE_SHORTEST_PATH_PLANS,
};