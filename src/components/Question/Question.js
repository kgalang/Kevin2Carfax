import React from 'react';
import './Question.css'
import Choices from '../Choices/Choices';


const Question = (props) => {
    let questionsArr = props.data.questions;
    let questionNum = props.questionNumber;

        return (
            <div className="question-choices-container">
                <h3 className="quiz-question">{questionsArr[questionNum].question}</h3>
                <div className="choices-container">
                <Choices {...questionsArr[questionNum]} />
                </div>
            </div>
        );
}

export default Question;