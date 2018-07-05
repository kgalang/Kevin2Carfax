import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component{
    constructor(props){
        super(props);
    }

    render() {
        if (this.props.quiz.answers){
            const answersObj = this.props.quiz.answers;
            const submittedChoicesObj = this.props.quiz.selectedChoices;
            const totalQuestions = Object.keys(answersObj).length;
            let incorrects = {};
            let totalIncorrect;

            for (const key in answersObj) {
                if (answersObj[key] !== submittedChoicesObj[key]) {
                    incorrects[key] = answersObj[key];
                }
            }

            totalIncorrect = Object.keys(incorrects).length;

            return (
                <div>
                Results: You got {totalIncorrect} wrong!
                </div>
            );
        } else { console.log("Quiz never loaded") }
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Results);