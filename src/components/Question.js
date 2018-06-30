import React from 'react';
import Choices from './Choices';


const Question = (props) => {

    let question_elements = props.questions.map((questionObj) => {
        return (
            <h4 key={questionObj.id}>
                {questionObj.question}
                <Choices {...questionObj} />
            </h4>
        )
    });

    console.log(props);
    return (
        <div>
            {question_elements}
        </div>
    );
}

export default Question;