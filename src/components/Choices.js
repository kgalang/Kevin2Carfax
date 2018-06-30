import React from 'react';

const Choices = (props) => {
    let choice_elements = props.choices.map((choiceObj) => {
        return (
            <p key={choiceObj.id}>
                {choiceObj.choice}
            </p>
        )
    });

    console.log(props);
    return (
        <div>
            {choice_elements}
        </div>
    );
}

export default Choices;