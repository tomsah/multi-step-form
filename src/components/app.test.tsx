import React from 'react'
import App from './app'
import {screen} from '@testing-library/react'
import {render} from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

const endText =
  'Please verify your email address, you should have received an email from us already'

test('Render the form and navigate', () => {
  render(<App />)
  const button = screen.getByText(/submit/i)
  expect(screen.getByText(/name/i)).toBeInTheDocument()
  expect(screen.getByText(/email/i)).toBeInTheDocument()
  expect(screen.getByText(/role/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  userEvent.click(button)

  // Getting to the second step
  expect(screen.getByText(/Step 2/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive updates/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive communication/i)).toBeInTheDocument()
  expect(screen.getByText(/submit/i)).toBeInTheDocument()
  userEvent.click(screen.getByText(/submit/i))

  // Getting to the last step
  expect(screen.getByText(/Step 3/i)).toBeInTheDocument()
  expect(screen.getByText(endText)).toBeInTheDocument()
})
