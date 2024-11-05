import { DOG_PAGE, DOG_ITEM_SCREEN, SHOPPING_CART_PAGE } from '../constants/state_ids'
import { verifyProductPage } from './verify/verifyProductPage'
import { verifyProductItemPage } from './verify/verifyProductItemPage'
import { verifyShoppingCartPage } from './verify/verifyShoppingCartPage'

export const DOG_PAGE_STATES = {
    [DOG_PAGE]: {
        on :{
            SELECT_PRODUCT: [DOG_ITEM_SCREEN]
        },
        meta :{
            test: verifyProductPage
        }
    },
    [DOG_ITEM_SCREEN]:{
        on :{
            ADD_TO_CART: [SHOPPING_CART_PAGE]
        },
        meta :{
            test: verifyProductItemPage
        }
    },
    [SHOPPING_CART_PAGE]: {
        meta:{
            test: verifyShoppingCartPage
        }
    }
}

export default {
    DOG_PAGE_STATES
}