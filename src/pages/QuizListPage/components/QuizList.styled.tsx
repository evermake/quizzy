import styled from '@emotion/styled';
import { Link } from "react-router-dom";

export const QuizItem = styled.div`
cursor: pointer;
margin-bottom: 8px;
padding: 8px;
border-radius: 4px;
background-color: #e0e0e0;
transition: background-color 0.3s ease;
  text-decoration: none;
  
&:hover {
  background-color: #d0d0d0;
}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
