import styled from '@emotion/styled'

export const RootStyled = styled.div`
  padding: 35px 0 20px 20px;
  border-radius: 6px;
  border: 1px solid #E6E6E6;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;

  &:hover {
    border: 1px solid #6A9B59;
  }
`

export const TitleStyled = styled.h3`
  color: #000;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
`

export const DescriptionStyled = styled.p`
  color: #949494;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
