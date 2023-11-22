export interface AsyncDataState<T, E = string> {
    loading: boolean;
    data?: T;
    error?: E;
}

export interface QuizListRequest {
    status: Status;
    data: Data;
}

export interface Data {
    quizList: Array<QuizListItem>
}

export interface QuizListItem {
    id: number;
    name: string;
    status: "starts soon..." | "done" | "in process";
}

interface Status {
    code: number;
}
