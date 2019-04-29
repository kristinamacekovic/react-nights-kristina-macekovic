import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as routes from '../../routes'
import { Wrapper, Header, StyledLink } from './styled'
import { removeToken } from '../../utils/token'
import { removeCustomer } from '../../utils/customer'
import { logout } from '../../store/customer/actions'

class Layout extends Component {
  handleLogout = () => {
    this.props.logout()
    removeToken()
    removeCustomer()
    this.props.history.push(routes.HOMEPAGE)
  }
  render() {
    const { isAuth } = this.props
    return (
      <Fragment>
        <Header>
          <StyledLink to={routes.PRODUCT_LIST}>All Products</StyledLink>
          <StyledLink to={routes.CART}>My Cart</StyledLink>
          {isAuth ? (
            <>
              <StyledLink to={routes.ACCOUNT}>My Profile</StyledLink>
              <StyledLink as="button" onClick={this.handleLogout}>
                Logout
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to={routes.LOGIN}>Login</StyledLink>
              <StyledLink to={routes.SIGN_UP}>Sign Up</StyledLink>
            </>
          )}
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: Object.keys(state.customer).length !== 0,
})

const mapDispatchToProps = {
  logout,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
