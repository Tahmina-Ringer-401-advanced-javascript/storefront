import superagent from 'superagent';

let api ='https://tahmina-api-server.herokuapp.com/'

const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Elecronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, itemQuantityInCart: 0 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, itemQuantityInCart: 0 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, itemQuantityInCart: 0 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, itemQuantityInCart: 0 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, itemQuantityInCart: 0 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, itemQuantityInCart: 0 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, itemQuantityInCart: 0 },
  ],
  cart: [],
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

export const addItem = (name) => {
  return {
    type: 'ADD-ITEM',
    payload: name,
  }
}

export const reset = () => {
  console.log("we made it RESET")
  return {
    type: 'RESET'
  }
}

//Exported action for components to dispatch using thunk patern currying a fuction that takes a dispatch method as a param

export const getProduct = () => dispatch => {
  return superagent.get(api)
  .then(response => {
    dispatch(getAction(response.body))
  })
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}

export const postProduct = () => dispatch => {
  return superagent.post(api)
  .then(response => {
    dispatch(postAction(response.body))
  })
}

export const postAction = payload => {
  return {
    type: 'POST',
    payload: payload
  }
}

export const putProduct = (id) => dispatch => {
  return superagent.put(`${api}${id}`)
  .then(response => {
    dispatch(putAction(response.body))
  })
}

export const putAction = payload => {
  return {
    type: 'PUT',
    payload: payload
  }
}

export const deleteProduct = (id) => dispatch => {
  return superagent.delete(`${api}${id}`)
  .then(response => {
    dispatch(deleteAction(response.body))
  })
}

export const deleteAction = payload => {
  return {
    type: 'DELETE',
    payload: payload
  }
}

const ProductListReducer = (state= initialState, action) => {
  let { type, payload } = action;
  
    switch (type) {

      case 'CATEGORIES':
        console.log('payload', payload)
        return { ...state, activeCategory: payload }

      case 'CATEGORY':
        let updatedProducts = state.products.map(product => {
          if (product.category === payload) {
            return { product }
          }
          return updatedProducts;
        });
        return { ...state, products: updatedProducts }

      case 'DISPLAY':
        let products = state.products.map(product => {
          if (product.name === payload) {
            return { name: product.name, description: product.description, price: product.price }
          }
          return product;
        });
        return { ...state, products }
        case 'ADD-ITEM':
          return { 
            ...state, 
            cart: [...state.cart, payload]
          }
        case 'GET':
          return payload
          case 'POST':
            return payload;
            case 'PUT':
              return payload;
              case 'DELETE':
                return payload;
                  case 'RESET':
                    return initialState;
                      default:
                        return state;
      
    }                  
}
  

export default ProductListReducer;
