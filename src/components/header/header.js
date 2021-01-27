import { Typography } from '@material-ui/core';
import React from 'react';
import {Container} from '@material-ui/core'

const Header = (props) => {
  return(
    <Container maxWidth="md">
      <Typography variant="h1">
        Virtual Store
      </Typography>
    </Container>

  )
}

export default Header;