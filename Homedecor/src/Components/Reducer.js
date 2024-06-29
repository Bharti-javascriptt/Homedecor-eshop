export const initialState = {
  basket: [],
  basketCount: 0,
};

export const getBasketTotal = (basket) =>{
  return (basket?.reduce((amount, item) => item.price + amount, 0));}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_To_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        
        // basketCount: state.baske tCount + 1,
      };

      
      
    case "remove_from_basket": // Corrected action type
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in basket!`);
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
