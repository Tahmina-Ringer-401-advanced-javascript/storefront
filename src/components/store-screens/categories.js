
import React from 'react';
import { connect } from 'react-redux';
import { category, showCategory, addItem, reset } from '../../store/productStore';

const ProductCategory = (props) => {
  
console.log('props++++++++', props.products.categories)
  return (
    <div id='category'>
      {props.products.categories.map((category, i) => (
        <div key={i}>
          <button name={category.name} onClick={() => props.showCategory(category.name)}>{category.name}</button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({  
  category: (name) =>  {
    dispatch(category(name))
  }, 
  showCategory: (category) => {
    dispatch(showCategory(category))
  }, 
  addItem: (product) => {
    dispatch(addItem(product))
  },
  reset: () => {
    dispatch(reset()) 
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductCategory);