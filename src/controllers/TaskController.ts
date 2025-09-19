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

}

export default TaskController;