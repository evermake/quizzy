import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import type { Question } from '@/types/models/question';
import OptionQuestion from '@/pages/QuizDetailPage/QuestionContainer/components/OptionQuestion';
import ShortQuestion from '@/pages/QuizDetailPage/QuestionContainer/components/ShortQuestion';

const Container = styled.div`
  width:500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function QuestionInfo({
  question,
  error,
  isLoading,
  paginationId,
  handleChangeAnswer,
  userAnswers,
}: {
  question: Question;
  error: string;
  isLoading: boolean;
  handleChangeAnswer: (answer: string, isCorrect: boolean) => void;
  paginationId: number;
  userAnswers: NonNullable<unknown>;
}) {
  if (isLoading) {
    return <Container>Loading...</Container>;
  }

  if (error) {
    return (
      <Container>
        Error: {error}
      </Container>
    );
  }

  if (question && question.type === 'option') {
    return (
      <Container>
        <OptionQuestion
          question={question}
          handleChangeAnswer={handleChangeAnswer}
          paginationId={paginationId}
          userAnswers={userAnswers}
        />
      </Container>
    );
  }

  if (question && question.type === 'short') {
    return (
      <Container>
        <ShortQuestion
          question={question}
          handleChangeAnswer={handleChangeAnswer}
          paginationId={paginationId}
          userAnswers={userAnswers}
        />
      </Container>
    );
  }

  return null;
}

export default QuestionInfo;
