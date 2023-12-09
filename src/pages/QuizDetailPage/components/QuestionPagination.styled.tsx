import styled from '@emotion/styled'

export const PaginationContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
export const PaginationButton = styled.button`
  padding: 8px 16px;
  margin: 0 4px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
  &:hover {
    background-color: #d0d0d0;
  }
`
