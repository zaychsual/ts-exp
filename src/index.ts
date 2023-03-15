import express, { Application, Request, Response } from "express";
import { config as dontenv } from 'dotenv';
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
//Routers
import UserRoutes from "./routers/UserRoutes";
import AuthRoutes from "./routers/AuthRoutes";
import ToDoRoutes from "./routers/ToDoRoutes";

class App 
{
    public app: Application;

    constructor() 
    {
        this.app = express();
        this.plugins();
        this.routes();
        dontenv();
    }

    protected plugins(): void 
    {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void 
    {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("ini adalah route menggunakan TS");
        });

        this.app.use("/api/v1/users", UserRoutes);
        this.app.use("/api/v1/auth", AuthRoutes);
        this.app.use("/api/v1/todos", ToDoRoutes);
    }
}

const app = new App().app;
app.listen(process.env.NODE_PORT, () => {
    console.log("Aplikasi berjalan di port "+ process.env.NODE_PORT)
    console.log(process.env.NODE_PORT)
});