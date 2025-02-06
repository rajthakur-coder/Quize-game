const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all requests

app.get('/api/quiz', async (req, res) => {
    try {
        const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch quiz data' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));
