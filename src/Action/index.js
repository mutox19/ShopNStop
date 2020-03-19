export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_GROCERY = "REMOVE_GROCERY";

export function AddGroceryById(id)
{
    const action = {
        type: ADD_GROCERY,
        id
    }

    return action;
}



export function RemoveGroceryById(id)
{
    const action = {
        type: REMOVE_GROCERY,
        id
    }

    return action;
}