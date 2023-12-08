import { getNavigationsValue } from '@ijl/cli'

export const AppRoute = {
  HOME: getNavigationsValue('quizzy.home'),
  QUIZZES: getNavigationsValue('quizzy.quizzes'),
  SLUG: '/:slug',
  ID: '/:id',
}
