import { Router } from 'express';
import TaskController from './src/controllers/TaskController';


const router = Router();
const taskController = new TaskController();


//router.get('/task');
//router.get('/task/:id_task');
router.post('/task', taskController.add);
//router.put('/task/:id_task');
//router.delete('/task/:id_task');

export default router;
