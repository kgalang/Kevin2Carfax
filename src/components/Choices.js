import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChoice, nextQuestion } from '../actions/quiz-actions';

class Choices extends Component{
    constructor(props){
        super(props);
    }

    handleSelectChoice(choiceVal){
        this.props.selectChoice(choiceVal);
    }

    render() {
        console.log(this.props.quiz.answers)

        let choice_elements = this.props.choices.map((choiceObj) => {
            return (
                <div key={choiceObj.id}>
                    <label>
                        <input type="radio" value={choiceObj.choice}
                        readOnly={true}
                        checked={choiceObj.choice === this.props.quiz.selectedChoices[this.props.quiz.questionNumber]}
                        onClick={() => this.handleSelectChoice(choiceObj.choice)}/>
                        {choiceObj.choice}
                    </label>
                </div>
            )
        });
    
        return (
            <div>
                <form>
                {choice_elements}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps, { selectChoice })(Choices);