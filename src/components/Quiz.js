import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, nextQuestion } from '../actions/quiz-actions';

import Question from './Question';

class Quiz extends Component {
    constructor(props){
        super(props);
        this.props.fetchQuiz();
        this.onNextQuestion = this.onNextQuestion.bind(this);
    }

    onNextQuestion() {
        this.props.nextQuestion();
    }

    render() {
       if (this.props.quiz.data) {
           let data = this.props.quiz.data;

        return (
            <div>
                <h3>{data.title}</h3>
                <div>
                    {console.log(this.props.quiz.questionNumber)}
                    <Question {...this.props.quiz}/>
                </div>
                <button onClick={this.onNextQuestion}>Next</button>
            </div>
        );
       } else {
           return ('loading')
       }
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps, { fetchQuiz, nextQuestion })(Quiz);