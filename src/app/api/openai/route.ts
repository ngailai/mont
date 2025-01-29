import {streamText} from 'ai';

import {createOpenAI} from '@ai-sdk/openai';

import {initialMessage} from '../../../lib2/data';

const openai = createOpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    baseURL: process.env.OPENAI_BASE_URL,
});
export const runtime = 'edge';
export async function POST(req: Request) {
    const {messages} = await req.json();

    const stream = await streamText({
        model: openai.chat('gpt-4o-turbo'),
        messages: [initialMessage, ...messages],
        temperature: 1,
    });
    return stream?.toDataStreamResponse();
}
