import React from 'react'
import { PaginationButton, PaginationContainer } from './QuestionPagination.styled'

function QuestionPagination({ questionIds, handlePaginateBtn }) {
  return (
    <PaginationContainer>
      {questionIds.map((questionId, id) => (
        <PaginationButton
  key={questionId}
  onClick={() => handlePaginateBtn(questionId, id)}
>
  {id + 1}
</PaginationButton>
      ))}
    </PaginationContainer>
  )
}

export default QuestionPagination
