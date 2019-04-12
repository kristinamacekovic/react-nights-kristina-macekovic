import React, { Component } from 'react'
import { Formik } from 'formik'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'

class SignUp extends Component {
  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleSubmit = () => {
    console.log('Success!')
  }

  render() {
    return (
      <Layout>
        <H1>Sign Up</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Input name="firstName" label="First name" />
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Input
                name="passwordConfirm"
                label="Confirm password"
                type="password"
              />
              <Button>Sign Up</Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

export { SignUp }
