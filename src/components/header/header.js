import { Typography } from '@material-ui/core';
import React from 'react';
import {Container} from '@material-ui/core'
import { connect } from 'react-redux';
import { category, showCategory, addItem, reset } from '../../store/productStore';
import Button from '@material-ui/core/Button';
import Link from 'react-router-dom'
import cart from '../cart/simplecart';

const Header = (props) => {
  console.log(cart)
  return(
    <Container maxWidth="md">
      <Typography variant="h1">
        Virtual Store
      </Typography>
      <div id='category'>
      {props.products.products.map((product, i) => (
        <div key={i}>  
          <Link to="/cart"><Button name={product.name} onClick={() => props.addItem(product.name)}>Shopping Cart</Button></Link> 
          
        </div>
      ))}
    </div>
    </Container>
// create a link to shopping carts with button
//react router dom - link - to cart component
//bring in cart
// When user clicks on cart how to render
)
}

// use mapStateToProps shows amout of products/const bring in connect
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);;