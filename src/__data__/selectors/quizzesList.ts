import { createSelector } from 'reselect';

const getStore = state => state.quizzesList;

const getData = createSelector(getStore, (state) => state.data);

export const getQuizzes = createSelector(getData, (state) => state?.quizzes);
// export const getSlides = createSelector(getmainData, (state) => state?.slides);
// export const getImgArr = createSelector(getmainData, (state) => state?.imgArr);

export const getLoading = createSelector(getStore, (state) => state?.loading);
export const getError = createSelector(getStore, (state) => state.error);
