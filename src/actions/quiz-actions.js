import { QUIZ_API_ENDPOINT } from '../../src/config';
import { FETCH_QUIZ } from './action-types';

import { mockQuiz } from '../data/mockQuiz';

export const fetchQuiz = () => {
    return {
        type: FETCH_QUIZ,
        payload: mockQuiz
    }
}