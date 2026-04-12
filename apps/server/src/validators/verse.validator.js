import { z } from 'zod';

export const saveVerseSchema = z.object({
  surah: z.number().min(1).max(114),
  ayat: z.number().min(1),
  translation: z.string().min(1),
  personalLesson: z.string().optional(),
  tags: z.array(z.string()).optional()
});

export const updateVerseSchema = z.object({
  personalLesson: z.string().optional(),
  tags: z.array(z.string()).optional(),
  aiContext: z.object({
    literal: z.string().optional(),
    historical: z.string().optional(),
    modernRelevance: z.string().optional()
  }).optional()
});