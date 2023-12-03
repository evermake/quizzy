import React, { useState } from 'react';
import Timer from '~/components/Timer';
import Answer from '~/components/Answer';
import Markdown from '~/components/Markdown';
import { Grid, Button } from '@mantine/core';
export const QuestionPage: React.FC = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);

    const handleAnswerChange = (value: string) => {
        setSelectedAnswer(value);
    };

    const handleTimeout = () => {

    };
    const markdownContent = `
# Hello, this is a Title

This is some **bold** and *italic* text.

- This is an unordered list item
- Another unordered list item

1. This is an ordered list item
2. Another ordered list item

[Visit my channel](https://t.me/+4Qu7uZWS72AyYWZi)
  `;
    return (
        <div>
            <Grid>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                    <Markdown md={markdownContent} />
            <Answer
                type="single-choice"
                options={['Option 1', 'Option 2', 'Option 3']}
                value={selectedAnswer}
                onChange={handleAnswerChange}
                onSubmit={() => console.log('Submitted:', selectedAnswer)}
                onSkip={() => console.log('Skipped:', selectedAnswer)}
            /></Grid.Col>
                <Grid.Col span={{ base: 6, md: 3, lg: 3 }}>
                    <Timer duration={60} onTimeout={handleTimeout} /></Grid.Col>
            </Grid>
        </div>
    );
};

