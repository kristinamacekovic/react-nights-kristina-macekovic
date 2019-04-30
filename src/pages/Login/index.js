import React, { useState } from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { Form, GlobalFormError } from '../../components/Form'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import * as customerActions from '../../store/customer/actions'
import { getCustomer } from '../../utils/customer'
import { getCustomerToken } from '../../api/customers/get-customer-token'
import { schema } from './schema'
import * as routes from '../../routes'

const initialValues = {
  email: '',
  password: ''
}

const LoginPage = ({ login, history }) => {
  const [globalError, setGlobalError] = useState('')

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const { ownerId } = await getCustomerToken({
        username: email,
        password
      })
      const customerInfo = await getCustomer(ownerId)
      login(customerInfo)
      history.push(routes.ACCOUNT)
    } catch (error) {
      setGlobalError(error.message)
    }
    setSubmitting(false)
  }

  return (
    <Layout>
      <H1>Login</H1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            {Boolean(globalError) && (
              <GlobalFormError>{globalError}</GlobalFormError>
            )}
            <Input name='email' label='Email' type='email' />
            <Input name='password' label='Password' type='password' />
            <Button disabled={isSubmitting}>
              {isSubmitting ? 'Logging In...' : 'Login'}
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  )
}

const mapDispatchToProps = {
  login: customerActions.login
}

export const Login = connect(
  null,
  mapDispatchToProps
)(LoginPage)
