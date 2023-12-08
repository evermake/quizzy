import React from 'react'

function QuestionPagination({ questionIds, handlePaginateBtn }) {
  return (
    <div>
      {questionIds.map((questionId, id) => {
        return (
          <button
            key={questionId}
            onClick={() => handlePaginateBtn(questionId, id)}
          >
            {id + 1}
          </button>
        )
      },
      )}

    </div>
  )
}

export default QuestionPagination
