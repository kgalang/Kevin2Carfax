import React, { Component } from 'react';
import './Quiz.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchQuiz, fetchAnswers, nextQuestion, prevQuestion } from '../../actions/quiz-actions';

import Question from '../Question/Question';

class Quiz extends Component {
    constructor(props){
        super(props);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
        this.handlePrevQuestion = this.handlePrevQuestion.bind(this);
    }

    componentDidMount() {
        this.props.fetchQuiz();
        this.props.fetchAnswers();
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
            <div className="content-grid">
                    <div className="question-choices-controls">
                        <div>
                            <Question {...this.props.quiz} />
                        </div>
                        <div className="controls">
                            <div className="prev-next">
                                <div>
                                <button id="prev-next-buttons" className="button" onClick={this.handlePrevQuestion}>Previous</button>
                                </div>
                                <div>
                                <button id="prev-next-buttons" className="button" onClick={this.handleNextQuestion}>Next</button>
                                </div>
                            </div>
                            <div className="submit-container">
                                <button className="button"><Link to="/results" id="submit-button">Submit</Link></button>
                            </div>
                        </div>
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