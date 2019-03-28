import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { getSKUs } from '../../api/get-SKUs'

class ProductList extends Component {
  state = {
    isLoading: true,
    products: {},
  }

  async componentDidMount() {
    const products = await getSKUs()

    this.setState({ isLoading: false, products })
  }

  render() {
    const {
      isLoading,
      products: { data },
    } = this.state
    return (
      <div>
        {isLoading && 'Loading...'}
        {data && (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <h2>{item.attributes.name}</h2>
                <img
                  src={item.attributes.image_url}
                  alt={item.attributes.description}
                  // TODO: replace with css file
                  height="60"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export { ProductList }
