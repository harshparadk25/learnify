import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import cors from 'cors';
import express from 'express';
import connectDB from './DBconnect/db.js';
import authRoutes from './routes/authRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import resultRoutes from './routes/resultRoutes.js';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: {
    origin: ['http://localhost:5173', process.env.FRONTEND_URL],
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
app.get('/', (req, res) => {
  res.send('AI quiz backend is running');
});
app.use('/api/auth', authRoutes);
app.use('/api/quiz', quizRoutes);
app.use('/api/result', resultRoutes);


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});