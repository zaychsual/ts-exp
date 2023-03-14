import { Request, Response } from "express";

class AuthController 
{
    index(req: Request, res: Response): Response 
    {
        return res.send("");
    }

    create(req: Request, res: Response): Response 
    {
        const { id, name } = req.body;

        return res.send("");
    }
    
}

export default new AuthController();