import { ollama } from 'ollama-ai-provider';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages } = await req.json();

    const result = streamText({
        model: ollama('gemma3:4b'),
        messages,
    });

    return result.toDataStreamResponse();
}