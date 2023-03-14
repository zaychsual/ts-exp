import express, { Application, Request, Response } from "express";
// import dotEnv from 'doten v';
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("ini adalah route menggunakan TS");
        });

        this.app.route("/users").post((req: Request, res: Response) => {
            res.send(req.body);
        })
    }
}

const port: number = 1602;
const app = new App().app;
app.listen(port, () => {
    console.log("Aplikasi berjalan di port "+ port)
});