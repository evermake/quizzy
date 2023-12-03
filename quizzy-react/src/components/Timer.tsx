import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';
import '@mantine/core/styles.css';
interface TimerProps {
  duration: number;
  onTimeout: () => void;

}


const Timer: React.FC<TimerProps> = ({ duration, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval);
          onTimeout(); // Callback when timer reaches zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration, onTimeout]);

  return (
    <Box bg="var(--mantine-color-blue-light)" >
       <div> Time Left: {timeLeft} seconds</div>
    </Box>
  );};

export default Timer;
