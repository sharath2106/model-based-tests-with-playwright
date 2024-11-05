import { exec } from 'child_process';
import { clickButton } from './definitions/clickButton';

export const WELCOME_PAGE_EVENTS = {
    ENTER_STORE: {
        exec: clickButton("//a[text()='Enter the Store']"),
    },
};

export default {
    WELCOME_PAGE_EVENTS,
};