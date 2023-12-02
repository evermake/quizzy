import React from 'react'
import { render } from '@testing-library/react'
import QuizzesList from '..'

jest.mock('react-router-dom', () => ({
  Link: jest.fn().mockImplementation(({ children }) => {
    return children
  }),
}))

describe('quizzesList', () => {
  it('should render correctly if there are no quizzes', () => {
    const { container } = render(<QuizzesList quizzes={[]} />)
    expect(container.firstChild).toBeNull()
  })
  it('should render List Item if one quiz is passed', () => {
    const { container } = render(<QuizzesList quizzes={[{ name: 'name', slug: 'slug', description: 'desc' }]} />)
    expect(container.childNodes.length).toBe(1)
  })
  it('should render List Item if two quizzes are passed', () => {
    const { container } = render(<QuizzesList quizzes={[{ name: 'name1', slug: 'slug1', description: 'desc1' }, { name: 'name2', slug: 'slug2', description: 'desc2' }]} />)
    expect(container.childNodes.length).toBe(2)
  })
})
