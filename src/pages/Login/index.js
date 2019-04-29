import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { login } from '../../store/customer/actions'
import { getCustomer } from '../../utils/customer'
import { getCustomerToken } from '../../api/customers/get-customer-token'
import { schema } from './schema'
import * as routes from '../../routes'

class LoginPage extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password,
      })
      const customerInfo = await getCustomer(ownerId)
      this.props.login(customerInfo)
      this.props.history.push(routes.ACCOUNT)
    } catch (error) {
      this.setState({
        globalError: error.message,
      })
    }
    setSubmitting(false)
  }

  render() {
    const { globalError } = this.state
    return (
      <Layout>
        <H1>Login</H1>
        <Formik
          initialValues={this.initialValues}
          validationSchema={schema}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {Boolean(globalError) && (
                <GlobalFormError>{globalError}</GlobalFormError>
              )}
              <Input name="email" label="Email" type="email" />
              <Input name="password" label="Password" type="password" />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'Login'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  login,
}

export const Login = connect(
  null,
  mapDispatchToProps
)(LoginPage)
