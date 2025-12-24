import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateProductName(
  category: string,
  keywords: string[],
  target?: string
): Promise<any[]> {
  const prompt = PRODUCT_NAME_PROMPT
    .replace('{category}', category)
    .replace('{keywords}', keywords.join(', '))
    .replace('{target}', target || '일반');
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'system', content: prompt }],
  });
  return response.choices[0].message.content;
}
