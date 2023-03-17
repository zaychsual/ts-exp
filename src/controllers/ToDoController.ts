import { Request, Response } from "express";
import IController from "./ControllerInterface";
import ToDoService from "../service/ToDoService";

class ToDoController implements IController 
{
    index = async (req: Request, res: Response): Promise<Response> =>
    {
        const service: ToDoService = new ToDoService(req);
        const todos = await service.getAll();

        return res.send({
            message: "List",
            data: todos
        });
    }

    create = async (req: Request, res: Response): Promise<Response> =>
    {
        const service: ToDoService = new ToDoService(req);
        const todo = await service.store();

        return res.send({
            msg: "Data Saved",
            data: todo
        });
    }

    show = async (req: Request, res: Response): Promise<Response> =>
    {
        const service: ToDoService = new ToDoService(req);
        const todo = await service.getOne();

        return res.send({
            message: "Show",
            data: todo
        });
    }

    update = async (req: Request, res: Response): Promise<Response> =>
    {
        const service: ToDoService = new ToDoService(req);
        const todo = await service.patch();

        return res.send({
            message: "Show",
            data: todo
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> =>
    {
        const service: ToDoService = new ToDoService(req);
        const todo = await service.delete();
        
        return res.send({
            message: "Todo Deleted",
            data: todo
        });
    }
    
}

export default new ToDoController();