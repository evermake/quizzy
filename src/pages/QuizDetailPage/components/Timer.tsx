import React, { useEffect } from 'react'

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
    <div>
      {minutes}:{seconds}
    </div>
  )
}

export default Timer
