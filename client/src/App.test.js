import { render, screen } from '@testing-library/react'
import Querio from './Querio'

test('renders learn react link', () => {
  render(<Querio />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
