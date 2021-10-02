import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './app'

test('Render the form', () => {
  render(<App />)
  expect(screen.getByText(/name/i)).toBeInTheDocument()
  expect(screen.getByText(/email/i)).toBeInTheDocument()
  expect(screen.getByText(/Password/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive updates/i)).toBeInTheDocument()
  expect(screen.getByText(/Receive communication/i)).toBeInTheDocument()
  expect(screen.getByText(/submit/i)).toBeInTheDocument()
})
