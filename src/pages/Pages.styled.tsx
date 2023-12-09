import styled from '@emotion/styled'

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
`

export const Container = styled.div`
  margin: 100px auto 0;
  width: 600px;
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const Button_ = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`
