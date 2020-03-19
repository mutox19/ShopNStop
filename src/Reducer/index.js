import grocery from './Grocery-reducer'
import shoppingBag from './ShoppingBag-reducer'

import { combineReducers} from 'redux'

const rootReducer = combineReducers({
    grocery,
    shoppingBag
})

export default rootReducer;