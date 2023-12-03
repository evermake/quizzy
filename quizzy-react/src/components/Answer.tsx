import React from 'react';
import { Radio, Checkbox, TextInput, Button, Flex, Space } from '@mantine/core';

interface AnswerProps {
  type: 'multiple-choice' | 'single-choice' | 'short-answer';
  options?: string[];
  value?: string;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
  onSkip: () => void;
}

const Answer: React.FC<AnswerProps> = ({ type, options, value, onChange, onSubmit, onSkip }) => {
  const handleAnswerChange = (newValue: string) => {
    onChange(newValue);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const handleSkip = () => {
    onSkip();
  };

  if (type === 'multiple-choice') {
    return (
      <div>
        <p>Select all that apply:</p>
        {options?.map((option) => (
          <Checkbox
            defaultChecked
            onChange={() => handleAnswerChange(option)}
            label={option}
          />
        ))}
        <Space h="md" />
        <Flex
          mih={50}
          gap="sm"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleSkip}>Skip</Button>
        </Flex>
      </div>
    );
  }

  if (type === 'single-choice') {
    return (
      <div>
        <p> Select one option:</p>
        {options?.map((option) => (
          <Radio
            checked={value === option}
            onChange={() => handleAnswerChange(option)}
            label={option}
          />
        ))}
        <Space h="md" />
        <Flex
          mih={50}
          gap="sm"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleSkip}>Skip</Button>
        </Flex>
      </div>
    );
  }

  if (type === 'short-answer') {

    return (
      <div>
        <p> Answer the question: </p>
        <TextInput size="md" value={value} onChange={(event) => handleAnswerChange(event.currentTarget.value)} />
        <Space h="md" />
        <Flex
          mih={50}
          gap="sm"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
        
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={handleSkip}>Skip</Button>
        </Flex>
      </div>
    );
  }

  return null;
};

export default Answer;
