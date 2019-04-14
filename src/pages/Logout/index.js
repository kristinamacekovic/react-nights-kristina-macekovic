import React, { Component } from 'react'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'

class Logout extends Component {
  render() {
    return (
      <Layout>
        <H1>You have logged out</H1>
      </Layout>
    )
  }
}

export { Logout }
