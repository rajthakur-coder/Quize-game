import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './styles/Result.css';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Ensure score and total exist to prevent errors
    const score = location.state?.score ?? 0;
    const total = location.state?.total ?? 0;

    const handleRestart = () => {
        navigate('/');
    };

    return (
        <div className="result-container">
            <h1>Quiz Results</h1>
            <p>You scored {score} out of {total}!</p>
            <button onClick={handleRestart}>Restart Quiz</button>
        </div>
    );
};

export default Result;
