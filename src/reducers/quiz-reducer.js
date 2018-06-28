import { quizTypes } from '../actions/action-types';
const { FETCH_QUIZ } = quizTypes;

export default function quizReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_QUIZ:
            return {
                quiz: payload
            }
        default:
            return state;
    }
}