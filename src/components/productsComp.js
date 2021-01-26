import { render } from '@testing-library/react';
import React, { useState } from 'react';
// import { connect } from 'react-redux';
import initialState from '../store/productStore';


const ProductComp = () => {
  const { products } = initialState;
  
  const [currentCategory, setCurrentCategory] = useState([]);

  function renderProducts(e) {
  let tempArray = [];
  const name = e.target.name;
  if(name === "Electronics") {
    // console.log('products!!!!!!!!!!!', products)
    products.forEach(product => {
      if(product.category === 'Electronics'){
        tempArray.push(product.name, product.description, product.price);
      }
    })
  }
  if(name === "Grocery") {
    // console.log('products!!!!!!!!!!!', products)
    products.forEach(product => {
      if(product.category === 'Grocery'){
        tempArray.push(product.name, product.description, product.price);
      }
    })
  }
  setCurrentCategory(tempArray);
}

  return (
    <div>
      <button name="Electronics" onClick={renderProducts}>Electronics</button>
      <button name="Grocery" onClick={renderProducts}>Groceries</button>
      <h2>Products</h2>
      {currentCategory}
    </div>
  )
}
//line 15 product map - grab product array from importing from store
//create an actions folder in src - listProducts.js
export default ProductComp;