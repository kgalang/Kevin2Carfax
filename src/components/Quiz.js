import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/quiz-actions';

import Question from './Question';

class Quiz extends Component {
    constructor(props){
        super(props);
        this.props.fetchQuiz();
    }
    

    render() {
       if (this.props.quiz.data) {
           console.log(this.props.quiz.data);
           let data = this.props.quiz.data;

        return (
            <div>
                <h3>{data.title}</h3>
                <div>
                    <Question {...this.props.quiz}/>
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


export default connect(mapStateToProps, { fetchQuiz })(Quiz);