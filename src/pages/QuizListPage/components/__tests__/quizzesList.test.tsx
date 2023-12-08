import React from 'react';
import { render, screen, waitFor } from '@/test-utils';
import userEvent from '@testing-library/user-event';
import QuizList from '../QuizList';
import { useGetQuizzesQuery } from '@/store/services/quizService';
import '@testing-library/jest-dom';

jest.mock('@/store/services/quizService', () => ({
  ...jest.requireActual('@/store/services/quizService'),
  useGetQuizzesQuery: jest.fn(),
}));

describe('QuizList Component', () => {
  it('renders loading state correctly', async () => {
    // Mocking the hook's return value
    (useGetQuizzesQuery as jest.Mock).mockReturnValue({ data: undefined, error: undefined, isLoading: true });

    render(<QuizList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders quiz list correctly', async () => {
    const mockQuizList = [
      { id: 1, title: 'Quiz 1' },
      { id: 2, title: 'Quiz 2' },
    ];

    (useGetQuizzesQuery as jest.Mock).mockReturnValue({ data: mockQuizList, error: undefined, isLoading: false });

    render(<QuizList />);

    expect(screen.getByText('Quiz 1')).toBeInTheDocument();
    await waitFor(() => {
      mockQuizList.forEach((quiz) => {
        expect(screen.getByText(quiz.title)).toBeInTheDocument();
      });
    });
  });

  it('handles error state correctly', async () => {
    const mockError = 'An error occurred';
    (useGetQuizzesQuery as jest.Mock).mockReturnValue({ data: undefined, error: mockError, isLoading: false });

    render(<QuizList />);

    expect(screen.getByText(`error:`)).toBeInTheDocument();
  });

  it('navigates to quiz detail on link click', async () => {
    const mockQuizList = [{ id: 1, title: 'Quiz 1' }];
    (useGetQuizzesQuery as jest.Mock).mockReturnValue({ data: mockQuizList, error: undefined, isLoading: false });

    render(<QuizList />);

    const quizLink = screen.getByText('Quiz 1');
    userEvent.click(quizLink);
  });
});
