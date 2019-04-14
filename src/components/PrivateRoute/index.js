import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

//const isAuth = false

class PrivateRouteComponent extends Component {
  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={routeProps => {
          if (this.props.isAuth) {
            return <Component {...routeProps} />
          }
          return (
            <Redirect
              to={{
                pathname: '/signup',
                state: { from: routeProps.location.pathname },
              }}
            />
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth,
})

const PrivateRoute = connect(
  mapStateToProps,
  null
)(PrivateRouteComponent)

export { PrivateRoute }
