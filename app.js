import express from 'express';
import bodyParser from 'body-parser';

import endpointNotFound from './controllers/404.js';
import postRoutes from './routes/post-routes.js';
import cors from './middlewares/cors-middleware.js';

const app = express();
app.use(bodyParser.json());

// CORS Headers
app.use(cors);

// posts Routes
app.use('/posts', postRoutes);

// 404 Handler
app.use(endpointNotFound);

app.listen(3000);
