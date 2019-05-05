/* eslint-env node */
const React = require('react')
const ReactDomServer = require('react-dom/server')
const Products = require('../src/pages/ProductList')

const express = require('express')
const app = express()
const port = 3000

app.get('/products', async (req, res) => {
  const props = await Products.getInitialProps()
  const html = ReactDomServer.renderToString(<Products {...props} />)
  res.send(html)
})

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`An example app listening on ${port}!`))
