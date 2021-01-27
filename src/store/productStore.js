

const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: ''
};

export const showCategory = (category) => {
  console.log('category', category)
  return {
    type: 'CATEGORIES',
    payload: category,
  }
}

export const category = (name) => {
  return {
    type: 'DISPLAY',
    payload: name,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

const ProductListReducer = (state= initialState, action) => {
  let { type, payload } = action;
  
  switch(type) {

    case 'CATEGORIES':
      console.log('payload', payload)
      return {...state, activeCategory: payload}

    // case 'CATEGORY':
    //   let updatedProducts = state.products.map(product => {
    //     if(product.category === payload) {
    //       return {product}
    //     }
    //     return updatedProducts;
    //   });
    //   return {...state, products: updatedProducts}
  
    // case 'DISPLAY':
    // let products = state.products.map(product => {
    //   if (product.name === payload) {
    //     return {name: product.name, description: product.description, price: product.price}
    //   }
    //   return product;
    // });
      // return {...state, products}
    case 'RESET':
      return initialState;

      default:
        return state;
  }
}

export default ProductListReducer;
