import { Router } from 'express';

import {
    index,
    store,
    show,
    update,
    destroy,
} from '../controllers/post-controller.js';

const router = Router();

// GET /posts
router.get('/', index);

// POST /posts
router.post('/', store);

// GET /posts/postId
router.get('/:_id', show);

// PATCH /posts/postId
router.patch('/:_id', update);

// DELETE /posts/postId
router.delete('/:_id', destroy);

export default router;
