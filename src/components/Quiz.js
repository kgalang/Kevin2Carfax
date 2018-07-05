import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, fetchAnswers, nextQuestion, prevQuestion } from '../actions/quiz-actions';

import Question from './Question';

class Quiz extends Component {
    constructor(props){
        super(props);
        this.props.fetchQuiz();
        this.props.fetchAnswers();
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
    }

    handleNextQuestion() {
        this.props.nextQuestion();
    }

    handlePrevQuestion() {
        this.props.prevQuestion();
    }

    render() {
       if (this.props.quiz.data) {
           let data = this.props.quiz.data;

        return (
            <div>
                <h3>{data.title}</h3>
                <div>
                    {console.log(this.props.quiz.questionNumber)}
                    <Question {...this.props.quiz} />
                </div>
                <button onClick={this.handlePrevQuestion}>Previous</button>
                <button onClick={this.handleNextQuestion}>Next</button>
                <div>
                    <button>Submit</button>
                </div>
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


export default connect(mapStateToProps, { fetchQuiz, fetchAnswers, nextQuestion, prevQuestion })(Quiz);