import { Request } from "express";
const db = require("../db/models");

class ToDoService {
    credential: {
        id: number
    };
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.credential = req.app.locals.credential;
        this.body = req.body; 
        this.params = req.params; 
    }

    getAll = async () => {
        const todos = await db.todo.findAll({
            where: {
                user_id: this.credential.id
            },
            attributes: ['id', 'desc']
        });

        return todos;
    }

    store = async () => {
        const { desc } = this.body;
        
        const todo = await db.todo.create({
            user_id: this.credential.id,
            desc
        });

        return todo;
    }

    getOne = async () => {
        
        const todo = await db.todo.findOne({
            where: {
                id: this.params,
                user_id: this.credential.id
            },
            attributes: ['id', 'desc']
        });

        return todo;
    }

    patch = async () => {
        const todo = await db.todo.update({
            desc: this.body
        },{
            where: {
                id: this.params,
                user_id: this.credential.id
            }
        });

        return todo;
    }

    delete = async () => {
        const todo = await db.todo.destroy({
            where: {
                id: this.params,
                user_id: this.credential.id
            }
        });

        return todo;
    }
}

export default ToDoService;