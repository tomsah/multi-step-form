import React from 'react'
import App from './app'
import {screen} from '@testing-library/react'
import {render} from '../../utils/test-utils'
import userEvent from '@testing-library/user-event'

const endText =
  'Please verify your email address, you should have received an email from us already'

const userData = {
  name: 'john',
  email: 'foo@gmail.com',
  role: 'frontend',
  password: 'T12345',
}

test('Render the form and navigate', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: /submit/i})
  const nameInput = screen.getByRole('textbox', {name: /name/i})
  const emailInput = screen.getByRole('textbox', {name: /email/i})
  const roleInput = screen.getByRole('textbox', {name: /role/i})
  const passwordInput = screen.getByLabelText(/Password/i)

  expect(button).toBeDisabled()

  expect(nameInput).toBeInTheDocument()
  userEvent.type(nameInput, userData.name)
  expect(nameInput).toHaveValue(userData.name)

  expect(emailInput).toBeInTheDocument()
  userEvent.type(emailInput, userData.email)
  expect(emailInput).toHaveValue(userData.email)

  expect(roleInput).toBeInTheDocument()
  userEvent.type(roleInput, userData.role)
  expect(roleInput).toHaveValue(userData.role)

  expect(passwordInput).toBeInTheDocument()
  userEvent.type(passwordInput, userData.password)

  expect(button).toBeInTheDocument()
  expect(button).not.toBeDisabled()

  userEvent.click(button)

  // Getting to the second step
  const buttonStep2 = screen.getByRole('button', {name: /submit/i})
  expect(screen.getByText(/Step 2/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive updates/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive communication/i)).toBeInTheDocument()
  expect(buttonStep2).toBeInTheDocument()
  userEvent.click(buttonStep2)

  // Getting to the last step
  expect(screen.getByText(/Done/i)).toBeInTheDocument()
  expect(screen.getByText(endText)).toBeInTheDocument()
})
