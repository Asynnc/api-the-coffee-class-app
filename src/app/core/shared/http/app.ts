
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import globalError from './middlewares/globalError';
import { LogRequests } from './middlewares/logRequests';
import './middlewares/tracer';
import { routes } from './routes';
import { limiter } from './middlewares/limiter';

mongoose.connect(`${process.env.MongoDB_URL_Cloud}`)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.error(err));

const app = express();
app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
app.use(LogRequests);
app.use('/api', routes);
app.use(globalError);

export { app };
