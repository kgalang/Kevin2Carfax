import { QUIZ_API_ENDPOINT } from '../../src/config';
import {
    FETCH_QUIZ,
    FETCH_ANSWERS,
    NEXT_QUESTION,
    PREV_QUESTION,
    SELECT_CHOICE,
} from './action-types';

import { mockQuiz } from '../data/mockQuiz';

export const fetchQuiz = () => {
    return {
        type: FETCH_QUIZ,
        payload: mockQuiz
    }
}

export const fetchAnswers = () => {
    return {
        type: FETCH_ANSWERS,
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

export const selectChoice = (choice) => {
    return {
        type: SELECT_CHOICE,
        payload: {
            choice
        }
    }
}

