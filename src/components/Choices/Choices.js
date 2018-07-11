import React, { Component } from 'react';
import './Choices.css'
import { connect } from 'react-redux';
import { selectChoice } from '../../actions/quiz-actions';

class Choices extends Component{

    handleSelectChoice(choiceVal){
        this.props.selectChoice(choiceVal);
    }

    render() {
        console.log(this.props);
        let choice_elements = this.props.choices.map((choiceObj) => {
            return (
                <div key={choiceObj.id} className="choice">
                    <label><h4>
                        <input type="radio" value={choiceObj.choice}
                        readOnly={true}
                        checked={choiceObj.choice === this.props.quiz.selectedChoices[this.props.quiz.questionNumber]}
                        onClick={() => this.handleSelectChoice(choiceObj.choice)}/>
                        {choiceObj.choice}
                    </h4></label>
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