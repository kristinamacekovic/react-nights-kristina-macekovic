import React, { Component } from 'react'
import { toast } from 'react-toastify'

export class ErrorBoundary extends Component {
  state = {
    error: false
  }

  static getDerivedStateFromError () {
    return {
      error: true
    }
  }

  componentDidCatch (error, info) {
    toast.error(`Error: ${error.message}`)
    console.error('Error boundary error', error, info)
  }

  render () {
    return this.state.error ? (
      <h2>Sorry, there is an error, please try refreshing the page.</h2>
    ) : (
      this.props.children
    )
  }
}
