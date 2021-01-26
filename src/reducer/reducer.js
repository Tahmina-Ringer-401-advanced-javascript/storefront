import initialState from '../store/productStore';
import action from '../actions/productAction';

let { type, payload } = action
//holds state/action
export const productListReducer = (state={products: []}, action) => {
  switch(action.type) {
    case 'CATEGORY':
    let products = state.products.map(product => {
      if (product.name === payload) {
        return {name: product.name, description: product.description, price: product.price}
      }
      return product;
    });
      return {...state, products}
    case 'RESET':
      return initialState;

      default:
        return state;
  }
}

