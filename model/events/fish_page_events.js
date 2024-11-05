import { exec } from 'child_process';
import { clickButton } from './definitions/clickButton';

export const FISH_PAGE_EVENTS = {
    SELECT_PRODUCT: {
        exec: clickButton("tr:nth-of-type(2) > td:nth-of-type(1) > a")
    },
    ADD_TO_CART:{
        exec: clickButton("tbody tr:nth-of-type(2) .Button")
    }
};

export default {
    FISH_PAGE_EVENTS,
};