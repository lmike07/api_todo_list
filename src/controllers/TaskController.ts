import { Request, Response } from "express";
import TaskService from "../services/TaskService";

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    get(req: Request, res: Response) {
        const {status} = req.query;

        if(status && (status === "in_progress" || status === "completed")) {

            const result = taskService.get(status);
            res.status(200).json(result);

        }else {
            res.status(401).json({error: "Invalid status parameter"});
        }
    }

    getById(req: Request, res: Response) {
        const {id_task} = req.params;

        if(id_task) {

            const result = taskService.getById(id_task);
            res.status(200).json(result);

        }else {
            res.status(401).json({error: "Invalid id_task parameter"})
        }
    }

    add(req: Request, res: Response) {

        const {id, descricao, data, status} = req.body;

        if (id || descricao && data && status) {

            if(status === "in_progress" || status === "completed") {
                const result = taskService.add(req.body);
                res.status(201).json(result);
            }else {
                res.status(401).json({error: "Invalid status: completed or in_progress"});
            }

        }else {
                res.status(401).json({error: "Invalid parameters"});
            }

    }

    update(req: Request, res: Response) {
        const {id, descricao, data, status} = req.body;
        const {id_task} = req.params;

        if(id && descricao && data && status && id_task) {

           if (status === "completed" || status === "in_progress") {
               const result = taskService.update(req.body, id_task);
               if(Object.keys(result).length > 0) {
                    res.json(result)
               }else {
                    res.status(404).json({error: "Task Not Found"});
               }


           }else {
                res.status(401).json({error: "Invalid status Parameters"})
           }

        }else {
            res.status(401).json({error: "Invalid Parameters"});
        }
    }

    delete(req: Request, res: Response) {
        const {id_task} = req.params;

        if(id_task) {
            const result = taskService.delete(id_task);

            res.json(result);
        }else {
            res.status(401).json({error: "id_task is required in params"});
            }
        }
    }


export default TaskController;