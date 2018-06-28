import { QUIZ_API_ENDPOINT } from '../../src/config';
import { FETCH_QUIZ } from './action-types';

import mockQuiz from '../data/mockQuiz';


// import axios from 'axios';

export const fetchQuiz = () => async (dispatch) => {
    const response = await mockQuiz

    dispatch({
        type: FETCH_QUIZ,
        payload: response
    })
}