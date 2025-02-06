import React, { useState, useEffect } from 'react';
import fetchQuizData from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './styles/Quize.css';

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null); // New state for feedback
    const navigate = useNavigate();

    useEffect(() => {
        const loadQuizData = async () => {
            const data = await fetchQuizData();
            console.log("Fetched Data:", data); // Debugging

            if (data && Array.isArray(data.questions)) {
                setQuizData(data.questions);
            }
        };
        loadQuizData();
    }, []);

    const handleAnswerSelect = (answer) => {
        if (selectedAnswer !== null) return; // Prevent multiple selections

        setSelectedAnswer(answer);
        
        const correctOption = quizData[currentQuestionIndex]?.options?.find(opt => opt.is_correct);
        setIsCorrect(answer === correctOption?.description);
        
        if (answer === correctOption?.description) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setIsCorrect(null);

        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            navigate('/result', { state: { score, total: quizData.length } });
        }
    };

    if (quizData.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = quizData[currentQuestionIndex];

    return (
        <div className="quiz-container">
            <h2>Question {currentQuestionIndex + 1}</h2>
            <p>{currentQuestion?.description}</p>
            <div className="options">
                {currentQuestion?.options?.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswerSelect(option.description)}
                        className={
                            selectedAnswer
                                ? option.description === selectedAnswer
                                    ? isCorrect ? 'correct' : 'wrong'
                                    : ''
                                : ''
                        }
                        disabled={selectedAnswer !== null} // Disable selection after answering
                    >
                        {option.description}
                    </button>
                ))}
            </div>
            <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
                {currentQuestionIndex < quizData.length - 1 ? 'Next' : 'Finish'}
            </button>
        </div>
    );
};

export default Quiz;
