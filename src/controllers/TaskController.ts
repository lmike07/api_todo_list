import { Request, Response } from "express";
import TaskService from "../services/TaskService";
import { GetSchema, GetByIdSchema, AddSchema, UpadteSchema, UpadteSchemaParams, DeleteSchema } from "../schemas/TaskSchema";
import {v4 as uuidv4} from 'uuid';


const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    async get(req: Request, res: Response) {

        try {
            const status = req.query.status;
            await GetSchema.validate(req.query);

            const result = taskService.get(status as string);
            res.status(200).json(result);
        } catch (error) {
             res.status(401).json({error: "Invalid status parameter"});
        }
        }
    

    async getById(req: Request, res: Response) {
        const {id_task} = req.params;

        
        try {
            await GetByIdSchema.validate(req.params)
            const result = taskService.getById(id_task);
            res.status(200).json(result);
        } catch (error) {
             res.status(401).json({error: error})
        }
        
    }

    async add(req: Request, res: Response) {

        try {
            await AddSchema.validate(req.body)
 
            const id = uuidv4();
            req.body.id = id

            const result = taskService.add(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(401).json({error: "Invalid status: completed or in_progress"});
        }
    }

    async update(req: Request, res: Response) {

        try {
            const {id_task} = req.params;

            await UpadteSchema.validate(req.body);
            await UpadteSchemaParams.validate(id_task);

            const result = taskService.update(req.body, id_task);
            if(Object.keys(result).length > 0) {
                res.json(result)
            }else {
                res.status(404).json({error: "Task Not Found"});
            }
        } catch (error) {
            res.status(404).json({error: error });
        }
    }

    async delete(req: Request, res: Response) {

        try {
            const {id_task} = req.params;

            await DeleteSchema.validate(id_task);
            const result = taskService.delete(id_task);
            res.json(result);
        } catch (error) {
            res.status(401).json({error: "id_task is required in params"});
        }
    }

}
export default TaskController;