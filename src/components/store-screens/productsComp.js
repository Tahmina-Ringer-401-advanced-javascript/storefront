
import React from 'react';
import { connect } from 'react-redux';
import { category, showCategory, reset } from '../../store/productStore';

const ProductComp = (props) => {
  
  console.log('props.products', props.products);
  return (
    <div id='category'>
      {props.products.products.map((product) => {
        if(product.category === props.products.activeCategory) {
          return <p>Name: {product.name} In Stock: {product.inStock}</p>
        }
      })}
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
  reset: () => {
    dispatch(reset()) 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductComp);
