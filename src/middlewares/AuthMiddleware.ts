import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction): any => 
{
    let auth = false;
    
    if(auth) {
        // ini merupakan perintah selanjutnya misalkan lolos maka akkan menjalankan function selanjutnya
        next();
    }
    return res.send("unauthenticated");
}