import { 
    FETCH_QUIZ,
    NEXT_QUESTION,
    PREV_QUESTION,
    SELECT_CHOICE
} from '../actions/action-types';

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
            let questionsArr = state.data.questions;
            if ((state.questionNumber + 1) >= questionsArr.length){
                return {
                    ...state
                }
            }
            return {
                ...state,
                questionNumber: (state.questionNumber + 1)
            }

        case PREV_QUESTION:
            if ((state.questionNumber - 1) < 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                questionNumber: (state.questionNumber - 1)
            }

        case SELECT_CHOICE:
            return {
                ...state,
                selectedChoices: payload.choice
            }

        default:
            return state;
    }
}