import { FETCH_QUIZ } from '../actions/action-types';

export default function quizReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_QUIZ:
            console.log("FROM REDUCER " + type);
            return {
                quiz: payload
            }
        default:
            return state;
    }
}