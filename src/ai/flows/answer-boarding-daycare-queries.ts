'use server';

/**
 * @fileOverview This file defines a Genkit flow to answer user queries about boarding and daycare services.
 *
 * - answerBoardingDaycareQueries - A function that answers user queries related to boarding and daycare services.
 * - AnswerBoardingDaycareQueriesInput - The input type for the answerBoardingDaycareQueries function.
 * - AnswerBoardingDaycareQueriesOutput - The return type for the answerBoardingDaycareQueries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerBoardingDaycareQueriesInputSchema = z.object({
  query: z.string().describe('The user query about boarding or daycare services.'),
});
export type AnswerBoardingDaycareQueriesInput = z.infer<typeof AnswerBoardingDaycareQueriesInputSchema>;

const AnswerBoardingDaycareQueriesOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query.'),
});
export type AnswerBoardingDaycareQueriesOutput = z.infer<typeof AnswerBoardingDaycareQueriesOutputSchema>;

export async function answerBoardingDaycareQueries(input: AnswerBoardingDaycareQueriesInput): Promise<AnswerBoardingDaycareQueriesOutput> {
  return answerBoardingDaycareQueriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerBoardingDaycareQueriesPrompt',
  input: {schema: AnswerBoardingDaycareQueriesInputSchema},
  output: {schema: AnswerBoardingDaycareQueriesOutputSchema},
  prompt: `You are a helpful chatbot for Ultimutt Pet Resort, a premium dog boarding and daycare in Gurgaon. Answer the following question about our services:\n\n{{query}}\n\nBe concise and provide accurate information about boarding availability, daycare timings, rates, packing essentials, and vaccination requirements.`,
});

const answerBoardingDaycareQueriesFlow = ai.defineFlow(
  {
    name: 'answerBoardingDaycareQueriesFlow',
    inputSchema: AnswerBoardingDaycareQueriesInputSchema,
    outputSchema: AnswerBoardingDaycareQueriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
