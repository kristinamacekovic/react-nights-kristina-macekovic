import React, { Component } from 'react'

// import { getDetail } from '../../api/get-detail'

// TODO: fetch product detail

class ProductDetail extends Component {
  state = {}

  /* async componentDidMount() {
    const product = await getDetail()

    this.setState({ isLoading: false, products })
  } */

  render() {
    const { match } = this.props
    return (
      <div>
        <h1>Product detail: { match.params.productID }</h1>
      </div>
    )
  }
}

export { ProductDetail }
