import React, { FC } from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/Layout'
import { H1 } from '../../components/Typography'
import { CustomerType } from '../../global/types'
import { AppState } from '../../store/index'
import { CustomerState } from '../../store/customer/index'

type AccountProps = {
  customer: CustomerState
}

const AccountPage: FC<AccountProps> = ({ customer }) => (
  <Layout>
    <H1>Hello, {customer ? customer.attributes.metadata.firstName : ''}!</H1>
  </Layout>
)

const mapStateToProps = (state: AppState) => ({ customer: state.customer })

export const Account = connect(mapStateToProps)(AccountPage)
