import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'

import GlobalStyles from './GlobalStyles'
import { ErrorBoundary } from './components/ErrorBoundary'
import { configureStore } from './store'
import Layout from '../src/components/Layout'

class MyApp extends App {
  static async getInitialProps (Component, ctx) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={this.props.store}>
          <React.Fragment>
            <GlobalStyles />
            <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
            <ErrorBoundary>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ErrorBoundary>
          </React.Fragment>
        </Provider>
      </Container>
    )
  }
}

// eslint-disable-next-line
export default withRedux(configureStore)(MyApp)
