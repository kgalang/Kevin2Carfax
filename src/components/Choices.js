import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectChoice } from '../actions/quiz-actions';

class Choices extends Component{
    constructor(props){
        super(props);
    }

    handleSelectChoice(val){
        this.props.selectChoice(val);
    }

    render() {
        console.log(this.props)
        let choice_elements = this.props.choices.map((choiceObj) => {
            return (
                <div key={choiceObj.id}>
                    <label>
                        <input type="radio" value={choiceObj.choice} onClick={() => this.handleSelectChoice(choiceObj.choice)}/>
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