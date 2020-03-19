import { ADD_GROCERY, REMOVE_GROCERY } from '../Action';
import groceryItemList from '../Data/groceryItems.json';
import { AddToBag } from './Helper';

export default function Grocery(state = groceryItemList, action)
{
    
    switch(action.type)
    {
        
        case ADD_GROCERY:
            
            let grocery = state.filter(item=>item.id !== action.id);
            return grocery;
        case REMOVE_GROCERY:
            
            let grocery1 = [...state, AddToBag(action.id)];
            return grocery1;
        default:
            return state;
    }
}