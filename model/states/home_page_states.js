import { FISH_PAGE, DOG_PAGE, HOME_PAGE } from '../constants/state_ids'
import { verifyHomePage } from './verify/verifyHomePage'


export const HOME_PAGE_STATES = {
    [HOME_PAGE]: {
        on: {
            CLICK_FISH: [FISH_PAGE],
            CLICK_DOG: [DOG_PAGE],
            CLICK_CAT: [FISH_PAGE],
            CLICK_REPTILES: [FISH_PAGE],
            CLICK_BIRDS: [FISH_PAGE]
        },
        meta: {
            test: verifyHomePage
        }
    },
}

export default {
    HOME_PAGE_STATES
}