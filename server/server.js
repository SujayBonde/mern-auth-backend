import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import dotenv from 'dotenv';
import authRouter from './routes/authRoutes.js';
import userRouter from './routes/userRoutes.js';


const app = express();
const port = process.env.PORT || 4000;

dotenv.config(); // Load .env here too
connectDB(); // Connect to MongoDB

const allowedOrigins = [
  'http://localhost:5173',
  'https://mern-auth-sujay.netlify.app'
];


app.use(express.json());

app.use(cookieParser());
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


// API Endpoints
app.get('/', (req,res)=> res.send('API Running Correctly...'));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, ()=> console.log(`Server started on port ${port}`));