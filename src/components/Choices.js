import React from 'react';

const Choices = (props) => {
    let choice_elements = props.choices.map((choiceObj) => {
        return (
            <div>
                <label>
                    <input type="radio" value={choiceObj.choice} key={choiceObj.id} />
                    {choiceObj.choice}
                </label>
            </div>
        )
    });

    console.log(props);
    return (
        <div>
            <form>
            {choice_elements}
            </form>
        </div>
    );
}

export default Choices;