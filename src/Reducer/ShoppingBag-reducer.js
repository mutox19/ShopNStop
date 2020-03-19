import { ADD_GROCERY, REMOVE_GROCERY } from '../Action';
import {AddToBag} from './Helper'

export default function ShoppingBag(state = [], action)
{
    switch(action.type)
    {
        case ADD_GROCERY:
            
            let shoppingBag = [...state, AddToBag(action.id)];
            
            return shoppingBag;
        case REMOVE_GROCERY:
            
            let shoppingBag1 = state.filter(item=>item.id !== action.id);
            return shoppingBag1;
        default:
            return state;
    }
}