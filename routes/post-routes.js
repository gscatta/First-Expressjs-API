import { Router } from 'express';

import { index, store } from '../controllers/post-controller.js';

const router = Router();

// GET /posts
router.get('/', index);

// POST /posts
router.post('/', store);

export default router;
