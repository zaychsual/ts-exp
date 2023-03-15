import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models");

class ToDoController implements IController 
{
    index = async (req: Request, res: Response): Promise<Response> =>
    {
        const { id } = req.app.locals.credential;
        const todos = await db.todo.findAll({
            where: {
                user_id: id
            },
            attributes: ['id', 'desc']
        });

        return res.send({
            message: "List",
            data: todos
        });
    }

    create = async (req: Request, res: Response): Promise<Response> =>
    {
        const { id } = req.app.locals.credential;
        const { desc } = req.body;
        
        const todo = await db.todo.create({
            user_id: id,
            desc
        });

        return res.send({
            msg: "Data Saved",
            data: todo
        });
    }

    show = async (req: Request, res: Response): Promise<Response> =>
    {
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;
        const todos = await db.todo.findOne({
            where: {
                id: id,
                user_id: user_id
            },
            attributes: ['id', 'desc']
        });

        return res.send({
            message: "Show",
            data: todos
        });
    }

    update = async (req: Request, res: Response): Promise<Response> =>
    {
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;
        const { desc } = req.body;
        
        const todos = await db.todo.update({
            desc
        },{
            where: {
                id: id,
                user_id: user_id
            }
        });

        return res.send({
            message: "Show",
            data: todos
        });
    }

    delete = async (req: Request, res: Response): Promise<Response> =>
    {
        const { id: user_id } = req.app.locals.credential;
        const { id } = req.params;
        await db.todo.destroy({
            where: {
                id: id,
                user_id: user_id
            }
        });
        
        return res.send({
            message: "Todo Deleted",
        });
    }
    
}

export default new ToDoController();