import productStore from './productStore';

const initialState = {
  cart: [],
  cartCount: 0,
};

export const addItem = (item) => {
  return {
    type: 'ADD',
    payload: item,
  };
};

export const updateQuantity = (item) => {
  return {
    type:'UPDATE-QUANITY',
    payload: item,
  };
};

const shoppingCart = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ADD':
      payload = {...payload, itemQuantityInCart: payload.itemQuantityInCart + 1}
      return {...state, cart: [...state.cart, payload], cartCount: state.cartCount + 1}
    
    case 'UPDATE-QUANITY':
      state.cart.forEach(value => {
        if (value.name === payload.name) {
          payload = {...payload, itemQuantityInCart: payload.itemQuantityInCart + 1}
        }
      })
      return {...state, cart: [payload]}

      default:
        return state;
  }
}

export default shoppingCart;