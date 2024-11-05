import test from 'node:test'
import { HOME_PAGE, WELCOME } from '../constants/state_ids'
import { verifyWelcomePage } from './verify/verifyWelcomePage'

export const WELCOME_PAGE_STATES = {
    [WELCOME]: {
        on: {
            ENTER_STORE: [HOME_PAGE]
        },
        description: "In Welcome Page",
        meta: {
            test: verifyWelcomePage
        },
    },
}

export default {
    WELCOME_PAGE_STATES
}