/* eslint-env node */
const express = require('express')
const next = require('next')

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/products/:id/:name', (req, res) => {
      return app.render(req, res, '/product', req.params)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) {
        throw err
      }
      // eslint-disable-next-line no-console
      console.log('Ready on http://localhost:' + PORT)
    })
  })
  .catch(ex => {
    // eslint-disable-next-line
    console.error(ex.stack)
    process.exit(1)
  })
