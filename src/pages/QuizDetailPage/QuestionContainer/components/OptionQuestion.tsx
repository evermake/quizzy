import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import type { Question } from '@/types/models/question';


const AnswerList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AnswerItem = styled.li`
  cursor: pointer;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  background-color: #e0e0e0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`;

function OptionQuestion({ question, handleChangeAnswer, userAnswers, paginationId }: {
  question: Question
  handleChangeAnswer: (answer: string, isCorrect: boolean) => void
  userAnswers: NonNullable<unknown>
  paginationId: number
}) {
  const [userAnswer, setAnswer] = useState<string>('');

  return (
    <div>
      <div>{question.content}</div>
      <AnswerList>
        {question.answers.map(answer => (
          <AnswerItem
            key={answer}
            onClick={() => {
              setAnswer(answer);
              handleChangeAnswer(answer, answer === question.correctAnswer);
            }}
          >
            {answer}
          </AnswerItem>
        ))}
      </AnswerList>
      <div>
        Current answer: 
        {userAnswers[paginationId]?.answer ?? userAnswer}
      </div>
      </div>
  );
}

export default OptionQuestion;
