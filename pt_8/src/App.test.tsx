import { render, screen } from '@testing-library/react'
import App from './App'

test('renders laptop site title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Самые производительные ноутбуки/i)
  expect(titleElement).toBeInTheDocument()
})
