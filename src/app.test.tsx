import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './app'

test('Header contains correct text', () => {
  render(<App />)
  const text = screen.getByText(/Hello world/i)
  expect(text).toBeInTheDocument()
})
