export type AsyncDataState<T, E = string> = {
  loading: boolean
  data?: T
  error?: E
}

export type QuizListRequest = {
  status: Status
  data: Data
}

export type Data = {
  quizList: Array<QuizListItem>
}

export type QuizListItem = {
  id: number
  name: string
  status: 'starts soon...' | 'done' | 'in process'
}

type Status = {
  code: number
}
