import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('increments count and toasts', async () => {
  render(<App />)
  const btn = screen.getByRole('button', { name: /count:/i })
  await userEvent.click(btn)
  expect(btn).toHaveTextContent('Count: 1')
})
