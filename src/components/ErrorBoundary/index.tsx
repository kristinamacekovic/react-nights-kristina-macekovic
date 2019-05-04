import React, { Component } from 'react'
import { toast } from 'react-toastify'

type ErrorBoundaryState = {
  error: boolean
}

export class ErrorBoundary extends Component {
  state: ErrorBoundaryState = {
    error: false,
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      error: true,
    }
  }

  componentDidCatch(error: Error, info: object): void {
    toast.error(`Error: ${error.message}`)
    console.error('Error boundary error', error, info)
  }

  render() {
    return this.state.error ? (
      <h2>Sorry, there is an error, please try refreshing the page.</h2>
    ) : (
      this.props.children
    )
  }
}
