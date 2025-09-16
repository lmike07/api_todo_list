import { Router, Request, Response } from 'express';

const router = Router();

// GET all tasks
router.get('/task');

// GET one task
router.get('/task/:id_task');

// POST new task
router.post('/task');

// PUT update task
router.put('/task/:id_task');

// DELETE task
router.delete('/task/:id_task');

export default router;
