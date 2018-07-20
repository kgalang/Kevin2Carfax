import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Results.css';

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

            const results = totalCorrect/totalQuestions*100;
            return results === 100
                ? (
                    <div>
                    <h3>Kevin is a {results}% match!</h3>
                    </div>
                  )
                : (
                    <div>
                    <h3>
                        This was fixed for you to be a 100% match and you got {results}% so...
                    </h3>
                    <img width="300px" src="https://memegenerator.net/img/instances/50919220/its-a-no-from-me-dawg.jpg"/>
                    </div>
                  )
        } else { console.log("Quiz never loaded") }
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Results);