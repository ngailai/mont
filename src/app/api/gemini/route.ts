import {Message, streamText} from 'ai';

import {createGoogleGenerativeAI} from '@ai-sdk/google';

import {initialMessage} from '../../../lib2/data';

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
});
export const runtime = 'edge';

const generateId = () => Math.random().toString(36).substring(2, 15);
const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
    {
        id: generateId(),
        role: 'user',
        content: initialMessage.content,
    },
    ...messages.map((message) => ({
        id: message.id || generateId(),
        role: message.role,
        content: message.content,
    })),
];

export async function POST(request: Request) {
    const {messages} = await request.json();
    const stream = await streamText({
        model: google.chat('gemini-pro'),
        messages: buildGoogleGenAIPrompt(messages),
        temperature: 0.7,
    });
    return stream?.toDataStreamResponse();
}
