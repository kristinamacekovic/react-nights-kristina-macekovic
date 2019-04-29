import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from './GlobalStyles'
import { H1 } from './components/Typography'
import { ProductList } from './pages/ProductList'
import { ProductDetail } from './pages/ProductDetail'
import { Cart } from './pages/Cart'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Account } from './pages/Account'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from './components/PrivateRoute'
import { configureStore } from './store'
import { getCustomer } from './utils/customer'
import * as routes from './routes'

const store = configureStore({ customer: getCustomer() })

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <H1>Welcome to the Purple Brand Store</H1>
    <Switch>
      <Route
        path={routes.HOMEPAGE}
        exact
        render={() => <Redirect to={routes.PRODUCT_LIST} />}
      />
      <Route path={routes.PRODUCT_LIST} exact component={ProductList} />
      <Route path={routes.PRODUCT_DETAIL} component={ProductDetail} />
      <Route path={routes.CART} component={Cart} />
      <Route path={routes.SIGN_UP} component={SignUp} />
      <Route path={routes.LOGIN} component={Login} />
      <PrivateRoute path={routes.ACCOUNT} component={Account} />
      <Route component={NotFound} />
    </Switch>
  </Provider>
)

export { App }
