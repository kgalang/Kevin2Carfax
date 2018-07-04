import { 
    FETCH_QUIZ,
    NEXT_QUESTION,
    PREV_QUESTION,
    SELECT_CHOICE,
    FETCH_ANSWERS
} from '../actions/action-types';

const initialState = {
    selectedChoices: {
    }
}

export default function quizReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_QUIZ:
            return {
                ...state,
                data: payload,
                questionNumber: 0
            };

        case FETCH_ANSWERS:
            return {
                ...state,
                answers: {
                    
                }
            }

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
                selectedChoices: {
                    ...state.selectedChoices,
                    [state.questionNumber]: payload.choice
                }
            }

        default:
            return state;
    }
}