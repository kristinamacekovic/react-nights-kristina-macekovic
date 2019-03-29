import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ProductListComponent from './components/List'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import { getSKUs } from '../../api/get-SKUs'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: [],
  }

  async componentDidMount() {
    const products = await getSKUs()

    this.setState({ isLoading: false, products })
  }

  render() {
    const {
      isLoading,
      products
    } = this.state

    return (
      <Layout>
        {isLoading && <Loader />}
        {products && <ProductListComponent products={products} />}
      </Layout>
    )
  }
}

export { ProductList }
