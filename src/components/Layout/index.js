import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { logoutUser } from '../../store/user/actions'
import { Wrapper, Header, StyledLink } from './styled'
import { removeToken } from '../../utils/token'
import { removeCustomer } from '../../utils/customer'

class Layout extends Component {
  handleLogout = () => {
    this.props.logoutUser()
    removeToken()
    removeCustomer()
    this.props.history.push('/')
  }
  render() {
    const { isAuth } = this.props
    return (
      <Fragment>
        <Header>
          <StyledLink to="/">All Products</StyledLink>
          <StyledLink to="/cart">My Cart</StyledLink>
          {isAuth ? (
            <>
              <StyledLink to="/account">My Profile</StyledLink>
              <StyledLink as="button" to="/logout" onClick={this.handleLogout}>
                Logout
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/signup">Sign Up</StyledLink>
            </>
          )}
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuth: Boolean(state.customer),
})

const mapDispatchToProps = {
  logoutUser,
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)
)
