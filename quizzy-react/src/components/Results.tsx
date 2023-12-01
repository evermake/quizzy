import React from 'react';

const Results = ({userAnswers}) => {


    return (
        <div>
            <h2>Results</h2>
            {Object.values(userAnswers).map((answer, idx)=>
                <div>#{idx + 1}: {answer}</div>)}
        </div>
    );
};

export default Results;
