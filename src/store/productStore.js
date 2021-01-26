import React from 'react';

let initialState = {
  products: [
    {_id:1, category: 'Electronics', name: 'TV', description: 'LG', price:'379', itemCount:0},
    {_id:2, category: 'Electronics', name: 'Xbox', description: '360', price:'429', itemCount:0},
    {_id:3, category: 'Electronics', name: 'Iphone', description: 'Apple', price:'889', itemCount:0},
    {_id:4, category: 'Grocery', name: 'Apple', description: 'Honey Crisp', price:'1.99lb', itemCount:0},
    {_id:5, category: 'Grocery', name: 'Cheese', description: 'Sharp Cheddar', price:'8.99', itemCount:0},
    {_id:6, category: 'Grocery', name: 'Lettuce', description: 'Butter', price:'2.99', itemCount:0},
  ]};

  
  // export const increment = (name) => {
  //   return {
  //     type: 'INCREMENT',
  //     payload: name
  //   }
  // }
  
  // export const reset = () => {
  //   return {
  //     type: 'RESET'
  //   }
  // }

  // export default (state=initialState, action) => {
  //   let { type, payload } = action;
  //   switch (type) {
  //     case 'INCREMENT':
  //       let products =
  //   }
  // }

  export default initialState;