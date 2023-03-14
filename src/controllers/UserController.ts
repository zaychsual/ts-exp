import { Request, Response } from "express";
import IController from "./ControllerInterface";

let data: any[] = [
    { id: 1, name: "Adi 1" },
    { id: 2, name: "Adi 2" },
    { id: 3, name: "Adi 3" },
    { id: 4, name: "Adi 4" },
    { id: 5, name: "Adi 5" },
    { id: 6, name: "Adi 6" },
    { id: 7, name: "Adi 7" },
    { id: 8, name: "Adi 8" },
    { id: 9, name: "Adi 9" },
    { id: 10, name: "Adi 10" }
];

class UserController implements IController 
{
    index(req: Request, res: Response): Response 
    {
        return res.send(data);
    }

    create(req: Request, res: Response): Response 
    {
        const { id, name } = req.body;

        data.push({
            id: id,
            name: name,
        })

        return res.send("data created");
    }

    show(req: Request, res: Response): Response 
    {
        const { id } = req.params;

        let user = data.find(
            item => item.id == id
        );

        return res.send(user);
    }

    update(req: Request, res: Response): Response 
    {
        const { id } = req.params;
        const { name } = req.body;
        let user = data.find(
            item => item.id == id
        );
        user.name = name;
        return res.send("data updated");
    }

    delete(req: Request, res: Response): Response 
    {
        const { id } = req.params;
        let user = data.filter(item => item.id != id);

        return res.send(user);
    }
    
}

export default new UserController();