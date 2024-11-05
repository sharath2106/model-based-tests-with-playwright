import { exec } from 'child_process';
import { clickButton } from './definitions/clickButton';

export const HOME_PAGE_EVENTS = {
    CLICK_FISH: {
        exec: clickButton("div#SidebarContent > a:nth-of-type(7) > img")
    },
    CLICK_DOG: {
        exec: clickButton("div#SidebarContent > a:nth-of-type(2) > img")
    },
    CLICK_CAT: {
        exec: clickButton("div#SidebarContent > a:nth-of-type(3) > img")
    },
    CLICK_REPTILES: {
        exec: clickButton("div#SidebarContent > a:nth-of-type(4) > img")
    },
    CLICK_BIRDS: {
        exec: clickButton("div#SidebarContent > a:nth-of-type(5) > img")
    },

};

export default {
    HOME_PAGE_EVENTS,
};