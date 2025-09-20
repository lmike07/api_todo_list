import { Router } from 'express';
import TaskController from './src/controllers/TaskController';


const router = Router();
const taskController = new TaskController();


router.get('/task', taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', taskController.add);
router.put('/task/:id_task', taskController.update);
//router.delete('/task/:id_task');

export default router;
