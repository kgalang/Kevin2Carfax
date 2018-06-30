import { QUIZ_API_ENDPOINT } from '../../src/config';
import { FETCH_QUIZ, NEXT_QUESTION, PREV_QUESTION } from './action-types';

import { mockQuiz } from '../data/mockQuiz';

export const fetchQuiz = () => {
    return {
        type: FETCH_QUIZ,
        payload: mockQuiz
    }
}

export const nextQuestion = () => {
    return {
        type: NEXT_QUESTION
    }
}

export const prevQuestion = () => {
    return {
        type: PREV_QUESTION 
    }
}