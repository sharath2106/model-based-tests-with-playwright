import { FISH_PAGE, FISH_ITEM_SCREEN, SHOPPING_CART_PAGE } from '../constants/state_ids'
import { verifyProductPage } from './verify/verifyProductPage'
import { verifyProductItemPage } from './verify/verifyProductItemPage'
import { verifyShoppingCartPage } from './verify/verifyShoppingCartPage'

export const FISH_PAGE_STATES = {
    [FISH_PAGE]: {
        on :{
            SELECT_PRODUCT: [FISH_ITEM_SCREEN]
        },
        meta :{
            test: verifyProductPage
        }
    },
    [FISH_ITEM_SCREEN]:{
        on :{
            ADD_TO_CART: [SHOPPING_CART_PAGE]
        },
        meta :{
            test: verifyProductItemPage
        }
    },
    [SHOPPING_CART_PAGE]: {
        //TODO
        meta:{
            test: verifyShoppingCartPage
        }
    }
}

export default {
    FISH_PAGE_STATES
}