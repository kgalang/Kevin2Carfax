import React, { Component } from 'react';
import { connect } from 'react-redux';


class Quiz extends Component {
    render() {
        return (
            <div>
                <h3>Quiz here</h3>
                <h3>{this.props.quiz}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(Quiz);