
import React from 'react';
import { connect } from 'react-redux';
import { category, showCategory, reset } from '../../store/productStore';
import Button from '@material-ui/core/Button';
import { addItem } from '../../store/productStore';

const ProductComp = (props) => {
  
  console.log('props.products', props.products);
  return (
    <div id='category'>
      {props.products.products.map((product) => {
        if(product.category === props.products.activeCategory) {
          return (
            <div>
            <p>Name: {product.name} In Stock: {product.inStock}</p>
            <Button name={product.name} onClick={() => props.addItem(product.name)}>Add Item</Button>
          </div>
          )
        }
        <Button name={product.name} onClick={() => props.addItem(product.name)}>Add Item</Button>
      })}
    </div>
  )
}



// console.log('props++++++++++++++++!!!!!', props)
// const getProduct = () => {
//   props.get();
// }
{/* 
{props.products.products.map((product, i) => (
  <div key={i}>
    {product.name}
  </div>
))}  */}



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

export default connect(mapStateToProps, mapDispatchToProps)(ProductComp);
