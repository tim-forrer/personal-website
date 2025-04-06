'use client';

import { useChat } from '@ai-sdk/react';
import { Paper, Input, Stack, ScrollArea, Group } from '@mantine/core';
import { MemoizedMarkdown } from './MemoizedMarkdown';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <Paper shadow='md' withBorder>
            <Stack>
                <ScrollArea h={300}>
                    {messages.map(message => (
                        <Group key={message.id}>
                            {message.role === 'user' ? 'User: ' : 'AI: '}
                            {message.parts.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <MemoizedMarkdown key={`${message.id}-${i}`} id={`${message.id}-${i}`} content={part.text} />
                                    // return <Text key={`${message.id}-${i}`}>{part.text}</Text>;
                                }
                            })}
                        </Group>
                    ))}
                </ScrollArea>

                <form onSubmit={handleSubmit}>
                    <Input
                        value={input}
                        placeholder="Ask me about Tim!"
                        onChange={handleInputChange}
                    />
                </form>
            </Stack>
        </Paper>
    );
}