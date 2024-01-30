import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import './middlewares/tracer';
import cors from 'cors';
import { routes } from '../http/routes';
import { limiter } from './middlewares/limiter';
import { LogRequests } from './middlewares/logRequests';
import globalError from './middlewares/globalError';
import helmet from 'helmet';

import express from 'express';

const app = express();

if (process.env.ENVIRONMENT === 'PROD') {
  app.use(limiter);
}

app.use(helmet());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(LogRequests);
app.use(cors());
app.use('/api', routes);
app.use(globalError);

export { app };
