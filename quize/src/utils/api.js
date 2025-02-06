import axios from 'axios';


 const fetchQuizData = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/quiz');
        return response.data;
    } catch (error) {
        
        console.error('Error fetching quiz data:', error);
    
        return null;
    }


};
export default fetchQuizData;