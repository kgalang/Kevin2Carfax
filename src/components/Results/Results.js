import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component{

    render() {
        if (this.props.quiz.answers){
            const answersObj = this.props.quiz.answers;
            const submittedChoicesObj = this.props.quiz.selectedChoices;
            const totalQuestions = Object.keys(answersObj).length;
            let totalCorrect = 0;

            for (const key in answersObj) {
                if (answersObj[key] === submittedChoicesObj[key]) {
                    totalCorrect++;
                }
            }

            return (
                <div>
                Kevin is a {totalCorrect/totalQuestions*100}% match!
                </div>
            );
        } else { console.log("Quiz never loaded") }
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Results);