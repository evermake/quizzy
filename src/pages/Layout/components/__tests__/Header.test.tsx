import '@testing-library/jest-dom'

import React from 'react'
import Header from '../Header'
import { render } from '@/test-utils'

jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockImplementation(({ to, ...rest }) => {
    return (
      <a href={to} {...rest} />
    )
  }),
}))

describe('header', () => {
  it('should render links', async () => {
    const header = render(<Header />)
    const links = await header.findAllByRole('link')
    expect(links.length).toBe(2)
    expect(links[0]).toHaveTextContent('Home')
    expect(links[1]).toHaveTextContent('Login')
  })
})
