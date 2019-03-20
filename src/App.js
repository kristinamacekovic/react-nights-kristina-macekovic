import React, { Component } from "react";
import config from "./config";

const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: config.clientId,
      scope: config.scope
    })
  }).then(res => res.json());

const getSkus = access_token =>
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`
    }
  }).then(res => res.json());

class App extends Component {
  state = {
    isLoading: true,
    products: []
  };

  async componentDidMount() {
    const { access_token } = await getToken();

    const products = await getSkus(access_token);

    this.setState({ isLoading: false, products });
  }

  render() {
    const {
      isLoading,
      products: { data }
    } = this.state;
    return (
      <div>
        <h1>This is an E-Commerce App</h1>
        {isLoading && "Loading..."}
        {!isLoading && (
          <ul>
            {data.map(item => (
              <li key={item.id}>
                <h2>{item.attributes.name}</h2>
                <img
                  src="item.attributes.image_url"
                  alt="item.attributes.description"
                  height="60"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
