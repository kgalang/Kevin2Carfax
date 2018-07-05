import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            Results
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Results);