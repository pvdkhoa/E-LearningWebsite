const express = require('express');
const cors = require('cors');
const app = express();

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:8081', // Use HTTP for local development
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers

const routerExam = require('./routes/examRouter.js')
const routerQuestion = require('./routes/questionRouter.js')
const routerAnswer = require('./routes/answerRouter.js')
app.use('/api/exam',routerExam)
app.use('/api/question',routerQuestion)
app.use('/api/answer',routerAnswer)

// Testing API
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});