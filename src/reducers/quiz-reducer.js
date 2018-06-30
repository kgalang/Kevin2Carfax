import { FETCH_QUIZ } from '../actions/action-types';

export default function quizReducer(state = '', { type, payload }) {
    switch (type) {
        case FETCH_QUIZ:
            // let questionChoices = payload.questions.map((obj) => {
                
            //     obj.choices.

            //     // obj.choices.map((choice) => {
            //     //     choice.choice
            //     // });
            // });
            
            

            return {
                ...state,
                quiz_title: payload.title,
                data: payload
                //choices: questionChoices,
                
            }
        default:
            return state;
    }
}