import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import endpointNotFound from './controllers/404.js';
import postRoutes from './routes/post-routes.js';
import cors from './middlewares/cors-middleware.js';
import { connectToDb } from './utilities/db-utils.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

// CORS Headers
app.use(cors);

// posts Routes
app.use('/posts', postRoutes);

// 404 Handler
app.use(endpointNotFound);

// connect to DB and start Server
connectToDb(() => app.listen(3000));
