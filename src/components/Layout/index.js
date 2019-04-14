import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/user/actions'

const Wrapper = styled.div`
  padding: 2rem;
`

const Header = styled.header`
  padding: 3rem;
  border-bottom: 0.1rem solid gainsboro;
`

const StyledLink = styled(Link)`
  margin-right: 1rem;
`

class LayoutPage extends Component {
  handleLogout = evt => {
    evt.preventDefault()
    this.props.logoutUser()
  }
  render() {
    return (
      <Fragment>
        <Header>
          <StyledLink to="/">All Products</StyledLink>
          <StyledLink to="/cart">My Cart</StyledLink>
          <StyledLink to="/signup">Sign Up</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/logout" onLogout={this.handleLogout}>
            Logout
          </StyledLink>
        </Header>
        <Wrapper>{this.props.children}</Wrapper>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  logoutUser,
}

const Layout = connect(
  null,
  mapDispatchToProps
)(LayoutPage)

export default Layout
