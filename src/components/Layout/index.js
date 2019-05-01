import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import * as routes from '../../routes'
import { Wrapper, Header, StyledLink } from './styled'

const Layout = ({ isAuth, children }) => (
  <Fragment>
    <Header>
      <StyledLink to={routes.PRODUCT_LIST}>All Products</StyledLink>
      <StyledLink to={routes.CART}>My Cart</StyledLink>
      {isAuth ? (
        <>
          <StyledLink to={routes.ACCOUNT}>My Profile</StyledLink>
          <StyledLink to={routes.LOGOUT}>Logout</StyledLink>
        </>
      ) : (
        <>
          <StyledLink to={routes.LOGIN}>Login</StyledLink>
          <StyledLink to={routes.SIGN_UP}>Sign Up</StyledLink>
        </>
      )}
    </Header>
    <Wrapper>{children}</Wrapper>
  </Fragment>
)

const mapStateToProps = state => ({
  isAuth: Object.keys(state.customer).length !== 0
})

export default connect(mapStateToProps)(Layout)
