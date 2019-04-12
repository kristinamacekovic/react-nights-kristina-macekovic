import React, { Component } from 'react'
import { Formik } from 'formik'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'

class Login extends Component {
  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = () => {
    console.log('Success!')
  }

  render() {
    return (
      <Layout>
        <H1>Login</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Button>Login</Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { Login }
