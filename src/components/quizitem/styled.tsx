import styled from "@emotion/styled";

export const QuizItemWrapper = styled.div`
  padding: 35px 0 20px 20px;
  border-radius: 6px;
  border: 1px solid #E6E6E6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  : hover {
    border: 1px solid #6A9B59;
  }
  margin-bottom: 25px;
`

export const QuizItemTitle = styled.h3`
  color: #000;
  text-align: center;
  font-family: Inter,sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  //line-height: normal;
`

export const QuizItemDescr = styled.p`
  color: #949494;
  font-family: Inter,sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
