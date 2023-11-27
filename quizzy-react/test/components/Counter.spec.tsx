import { fireEvent, render, screen } from '@testing-library/react'
import { Counter } from '~/components/Counter'

describe('basic', async () => {
  it('increment work', async () => {
    render(<Counter />)

    expect(screen.getByRole('button')).toHaveTextContent('0')
    fireEvent.click(screen.getByRole('button'))

    await screen.findByText('1')
    expect(screen.getByRole('button')).toHaveTextContent('1')

    fireEvent.click(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))

    await screen.findByText('3')
    expect(screen.getByRole('button')).toHaveTextContent('3')
  })
})
