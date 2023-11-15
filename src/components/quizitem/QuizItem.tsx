import React from 'react';
import {Path} from "@remix-run/router/history";
import {StyledLink} from "../link/styled";
import {QuizItemDescr, QuizItemTitle, QuizItemWrapper} from "./styled";

interface QuizItemProps {
    name: string;
    status: string | 'starts soon...' | 'done' | 'missed';
    url?: string | Partial<Path>;
}

const QuizItem = (props: QuizItemProps) => {
    
    return (
        <QuizItemWrapper>
            <QuizItemTitle>{props.name}</QuizItemTitle>
            <QuizItemDescr>{props.status}</QuizItemDescr>
            <StyledLink to={props.url || '/'}>Go to quiz →</StyledLink>
        </QuizItemWrapper>
    );
};

export default QuizItem;
