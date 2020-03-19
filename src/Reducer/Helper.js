import groceryItemsList from '../Data/groceryItems.json'

export function AddToBag(id){

    let item = groceryItemsList.find((item) => item.id === id);

    return item;
}