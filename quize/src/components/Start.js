import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Start.css';

const Start = () => {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="start-container">
            <h1>Welcome to the Quiz!</h1>
            <p>Test your knowledge and see how many questions you can answer correctly.</p>
            <button onClick={handleStartQuiz} aria-label="Start the quiz">
                Start Quiz
            </button>
        </div>
    );
};

export default Start;
