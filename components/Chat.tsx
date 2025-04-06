'use client';

import React from 'react';
import { useChat } from '@ai-sdk/react';
import { Paper, Input, Stack, ScrollArea, Group, Text } from '@mantine/core';
import { MemoizedMarkdown } from './MemoizedMarkdown';
import { UIMessage } from 'ai';

function formatMessage(message: UIMessage): React.JSX.Element {
    switch (message.role) {
        case 'user':
            return (
                <Group justify='right' key={message.id}>
                    <Paper withBorder p='xs' bg='gray.2' maw='90%'>
                        <MemoizedMarkdown id={message.id} content={message.content} />
                    </Paper>
                </Group>
            );
        default:
            return (
                <Group key={message.id}>
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case 'text':
                                return <MemoizedMarkdown key={`${message.id}-${i}`} id={`${message.id}-${i}`} content={part.text} />
                        }
                    })}
                </Group>
            );
    }
}

export default function Chat(): React.JSX.Element {
    const { messages, input, handleInputChange, handleSubmit } = useChat();
    return (
        <Paper shadow='md' withBorder w="95%" p='lg'>
            <Stack>
                <ScrollArea h={300}>
                    {messages.map(message => formatMessage(message))}
                </ScrollArea>

                <form onSubmit={handleSubmit}>
                    <Group justify='right'>
                        <Input
                            value={input}
                            placeholder="Ask me about Tim!"
                            onChange={handleInputChange}
                            w="90%"
                        />
                    </Group>
                </form>
            </Stack>
        </Paper>
    );
}