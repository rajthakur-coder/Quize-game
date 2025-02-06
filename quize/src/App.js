import React from 'react';

import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import {Routes, Route } from "react-router-dom";

const App = () => {
    return (
     
        <Routes>
          
                <Route path="/" element={<Start />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/result" element={<Result />} />
            
        </Routes>
      
    );
};

export default App;
