import styled from '@emotion/styled';
import React from 'react'
import type { Quiz } from '@/types/models/quiz'
import {Button_} from './Button.styled'; 

const QuizTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
function QuizDetails({ quiz, handleStartBtn }: { quiz: Quiz, handleStartBtn: () => void }) {
  return (
    <div>
      <QuizTitle>
        {quiz.title}
      </QuizTitle>
      <div>
        Description:
        {quiz.descr}
      </div>
      <div>
        Starts at:
        {quiz.opensAt}
      </div>
      <div>
        Finishes at:
        {quiz.closesAt}
      </div>
      {
        quiz.questionIds.length === 0
        && <h2>no questions in quiz</h2>
      }
      <Button_ onClick={handleStartBtn} disabled={quiz.questionIds.length === 0}>
        Start Quiz
      </Button_>
    </div>
  )
}

export default QuizDetails
