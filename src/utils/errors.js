/* eslint-disable max-classes-per-file */

class CustomError {
  constructor (message) {
    this.name = 'CustomError'
    this.message = message
  }
}

export class AsyncValidationError extends CustomError {}
