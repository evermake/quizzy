import { z } from 'zod'

export const User = z.object({
  id: z.string(),
  username: z.string(),
})
export type User = z.infer<typeof User>

export const Quiz = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
})

export const Attempt = z.object({
  id: z.string(),
  startedAt: z.date(),
  deadlineAt: z.date(),
})

//////

export const SingleChoiceQuestionType = z.literal('single-choice')
export const MultipleChoiceQuestionType = z.literal('multiple-choice')
export const TextQuestionType = z.literal('text')

export const QuestionType = z.union([
  SingleChoiceQuestionType,
  MultipleChoiceQuestionType,
  TextQuestionType,
])

export const Option = z.object({
  id: z.string(),
  text: z.string(),
})

export const SingleChoiceQuestionConfig = z.object({
  type: SingleChoiceQuestionType,
  options: z.array(Option).min(2),
})

export const MultipleChoiceQuestionConfig = z.object({
  type: MultipleChoiceQuestionType,
  options: z.array(Option).min(2),
})

export const TextQuestionConfig = z.object({
  type: TextQuestionType,
})

export const QuestionConfig = z.union([
  SingleChoiceQuestionConfig,
  MultipleChoiceQuestionConfig,
  TextQuestionConfig,
])

export const SingleChoiceQuestionAnswer = z.object({
  type: SingleChoiceQuestionType,
  optionId: z.string(),
})
export const MultipleChoiceQuestionAnswer = z.object({
  type: MultipleChoiceQuestionType,
  optionIds: z.array(z.string()),
})
export const TextQuestionAnswer = z.object({
  type: TextQuestionType,
  text: z.string(),
})

export const QuestionAnswer = z.union([
  SingleChoiceQuestionAnswer,
  MultipleChoiceQuestionAnswer,
  TextQuestionAnswer,
])

/////
