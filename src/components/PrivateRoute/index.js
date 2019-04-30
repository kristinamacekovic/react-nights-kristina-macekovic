import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import isEmpty from 'ramda/src/isEmpty'

import * as routes from '../../routes'

const PrivateRouteComponent = ({ isAuth, component: Component, ...rest }) => {
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
              pathname: routes.LOGIN,
              state: { from: routeProps.location.pathname }
            }}
          />
        )
      }}
    />
  )
}

const mapStateToProps = state => ({
  isAuth: !isEmpty(state.customer)
})

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent)
