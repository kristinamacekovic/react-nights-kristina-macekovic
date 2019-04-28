import React, { Component } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { schema } from './schema'
import { createCustomer } from '../../api/customers/create-customer'
import { getCustomer } from '../../api/customers/get-customer'
import { loginUser } from '../../store/user/actions'

class SignUpPage extends Component {
  state = {
    globalError: ''
  }
  initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  }

  handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await createCustomer(values)
      const customer = await getCustomer(ownerId)
      this.props.loginUser(customer)
      this.props.history.push('/account')
    } catch (error) {
      this.setState({
        globalError: error.message
      })
    }
    setSubmitting(false)
  }

  render () {
    const { globalError } = this.state
    return (
      <Layout>
        <H1>Sign Up</H1>
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
              <Input name='firstName' label='First name' />
              <Input name='email' label='Email' type='email' />
              <Input name='password' label='Password' type='password' />
              <Input
                name='passwordConfirm'
                label='Confirm password'
                type='password'
              />
              <Button disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </Layout>
    )
  }
}

const mapDispatchToProps = {
  loginUser
}

export const SignUp = connect(
  null,
  mapDispatchToProps
)(SignUpPage)
