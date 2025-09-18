import { Request, Response } from "express";
import TaskService from "../services/TaskService";

const taskService = new TaskService();

class TaskController {

    constructor() {

    }

    add(req: Request, res: Response) {
        console.log("BODY RECEBIDO:", req.body);
        console.log("HEADERS:", req.headers["content-type"]);

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