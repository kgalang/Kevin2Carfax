import QUIZ_API_ENDPOINT from '../../config';
import { FETCH_QUIZ } from './action-types';

import axios from 'axios';

export const fetchQuiz = () => async (dispatch) => {
    const response = await axios.get(`${QUIZ_API_ENDPOINT}`);

    dispatch({
        type: FETCH_QUIZ,
        payload: response.data
    })
}