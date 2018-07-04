import React from 'react';
import Choices from './Choices';


const Question = (props) => {
    let questionsArr = props.data.questions;
    let questionNum = props.questionNumber;

        return (
            <div>
                {questionsArr[questionNum].question}
                <Choices {...questionsArr[questionNum]} />
            </div>
        );
}

export default Question;