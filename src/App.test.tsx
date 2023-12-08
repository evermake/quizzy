import '@testing-library/jest-dom'

import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './app'
import { render, screen } from '@/test-utils'

jest.mock('@ijl/cli', () => ({
  getNavigationsValue: (val: string) => ({
    'quizzy.main': '/',
  }[val]),
  getConfigValue: (val: string) => ({
    'quizzy.api.base.url': '/api',
  }[val]),
}))

jest.mock('axios', () => ({
  get: () => Promise.reject(new Error('API is not available')),
}))

describe('app', () => {
  it('full app rendering/navigating', async () => {
    render(<App />)
    const user = userEvent.setup()

    // Go to home
    const homeLink = await screen.findByRole('link', { name: /home/i })
    await user.click(homeLink)

    // API is not available, so we should see the error page
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()

    // Go to login
    const loginLink = await screen.findByRole('link', { name: /login/i })
    await user.click(loginLink)

    // We should see the login page
    expect(await screen.findByRole('textbox')).toBeInTheDocument()
    expect(await screen.findByRole('heading', { name: /login/i })).toBeInTheDocument()
  })
})
