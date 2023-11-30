import {Question} from "~/models/question";

export interface Quiz {
    "id": number,
    "title": string,
    "descr": string,
    "opensAt": string,
    "closesAt": string,
    "questionIds": number[]
}
