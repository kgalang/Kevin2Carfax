import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import me from './Me.jpg';


const Landing = () => {
    return (
        <div className="grid">
            <div className="header">
                <h2>{"<"} Kevin x <span className="orange-text"><strong>Everfi</strong></span> {"/>"}</h2>
            </div>
            <div className="landing">
                <img src={me} alt="Image of Kevin"className="me-icon"></img>
                <h2 className="quiz-intro">How well does Kevin fit with Everfi?</h2>
                <Link to='/takequiz/' id="start-quiz">
                    <h3>Start Quiz</h3>
                </Link>
            </div>
            <div className="footer">
                <a href="https://github.com/kgalang" target="_blank">Github</a>
                <a href="https://www.linkedin.com/in/kgalang/" target="_blank">LinkedIn</a>
            </div>
        </div>
    );
}

export default Landing;