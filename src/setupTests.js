import { cleanup } from 'react-testing-library'

afterEach(cleanup)

const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning.*not wrapped in act/u.test(args[0]) ||
      /Warning: Can't perform a React state update on an unmounted component/u.test(
        args[0]
      )
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
