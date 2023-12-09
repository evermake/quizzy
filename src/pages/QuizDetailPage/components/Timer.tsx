import React, { useEffect } from 'react'
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const TimerContainer = styled.div`
  margin-bottom: 10px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
`;

function Timer({ time, updateTimer, finishQuiz }: { time: number, updateTimer: () => void, finishQuiz: () => void }) {
  useEffect(() => {
    if (time < 0) {
      finishQuiz()
    }
    const timeInterval = setInterval(() => {
      updateTimer()
    }, 1000)

    return () => {
      clearInterval(timeInterval)
    }
  }, [time])

  const minutes = Math.floor(time / 60)
  const seconds = time - minutes * 60

  return (
    <TimerContainer>
      <div>
        {minutes}:{seconds}
      </div>
    </TimerContainer>
  )
}

export default Timer
