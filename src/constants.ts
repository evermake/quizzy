import { getNavigationsValue } from '@ijl/cli'

export const AppRoute = {
  HOME: getNavigationsValue('quizzy.home'),
  LOGIN: getNavigationsValue('quizzy.login'),
  LOGOUT: '/logout',
  QUIZZES: getNavigationsValue('quizzy.quizzes'),
  SLUG: '/:slug',
  ID: '/:id',
}
