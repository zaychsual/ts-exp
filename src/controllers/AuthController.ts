import { Request, Response } from "express";
import Authentication from "../utils/Authentication";
const db = require("../db/models");

class AuthController 
{
    register = async (req: Request, res: Response): Promise<Response> =>
    {
        let { username, password } = req.body;
        const hashedPassword: string = await Authentication.hash(password);

        await db.user.create({ username, password: hashedPassword });

        return res.send("User Registered");
    }

    login = async(req: Request, res: Response): Promise<Response> =>
    {
        //cari data user
        let { username, password } = req.body;
        const user = await db.user.findOne({
            where: { username }
        });
        //check password
        if(user) {
            let compare = await Authentication.checkPass(password, user.password);
            if(compare) {
                let token = Authentication.generateToken(user.id, username, user.password);
                return res.send({
                    token
                });
            }
        }
        return res.send("koe ga terdaftar");
        //generate token
    }
    
}

export default new AuthController();