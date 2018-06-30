import { FETCH_QUIZ, NEXT_QUESTION } from '../actions/action-types';

export default function quizReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_QUIZ:
            return {
                ...state,
                quiz_title: payload.title,
                data: payload,
                questionNumber: 0,                
            };
        case NEXT_QUESTION:
            return {
                ...state,
                questionNumber: (state.questionNumber + 1)
            }
        default:
            return state;
    }
}