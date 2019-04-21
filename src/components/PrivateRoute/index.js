import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRouteComponent extends Component {
  render() {
    const { isAuth, component: Component, ...rest } = this.props
    return (
      <Route
        {...rest}
        render={routeProps => {
          if (isAuth) {
            return <Component {...routeProps} />
          }
          return (
            <Redirect
              to={{
                pathname: '/login',
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
  isAuth: Boolean(state.customer),
})

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)
