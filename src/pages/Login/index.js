import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { loginUser } from '../../store/user/actions'
import { getCustomer } from '../../utils/utils'
import { getCustomerToken } from '../../api/customers/get-customer-token'
import { schema } from './schema'

class LoginPage extends Component {
  state = {
    globalError: '',
  }

  initialValues = {
    email: '',
    password: '',
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: values.email,
        password: values.password,
      })
      const customerInfo = await getCustomer(ownerId)
      this.props.loginUser(customerInfo)
      this.props.history.push('/account')
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
  loginUser,
}

const Login = connect(
  null,
  mapDispatchToProps
)(LoginPage)

export { Login }
