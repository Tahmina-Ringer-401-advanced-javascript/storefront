import React from 'react';
import { connect } from 'react-redux';
import { updateQuanity } from '../../store/cart';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button'

const mapDispatchToProps = { changeQuanity };

function ShoppingCart(props) {
  const updateItemQuantity = (item) => {
    props.updateQuanity(item);
  }
  return (
    <Container maxWidth='md'>
      <Typography variant='h2'>
        Shopping Cart
      </Typography>
      <Card>
        {props.product.cart.map((item, idx) => (
          <CardContent key={idx}>
            <Typography color="primary">
              Category: {item.category}
            </Typography>
            <Typography>
              Description: {item.category}
            </Typography>
            <Typography>
              Price: {item.price}
            </Typography>
            <Button onClick={() => updateItemQuantity(item)}></Button>
          </CardContent>
        ))}
      </Card>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  product: state.shoppingCart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)