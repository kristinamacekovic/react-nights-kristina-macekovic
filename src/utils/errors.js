/* eslint-disable max-classes-per-file */

class CustomError {
  constructor (message) {
    this.name = 'CustomError'
    this.message = message
  }
}

CustomError.prototype = Object.create(Error.prototype)

export class AsyncValidationError extends CustomError {}
