import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/quiz-actions';


class Quiz extends Component {
    componentDidMount() {
        this.props.fetchQuiz()
    }

    render() {
        console.log(this.props.quiz)
        return (
            <div>
                <h3>Quiz here</h3>
                <p>{JSON.stringify(this.props.quiz)}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps, { fetchQuiz })(Quiz);