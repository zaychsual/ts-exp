import BaseRoute from "./BaseRoute";
import { auth } from "../middlewares/AuthMiddleware";
import validate from "../middlewares/ToDoValidator";
// controllers
import ToDoController from "../controllers/ToDoController";

class ToDoRoutes extends BaseRoute 
{
    public routes(): void 
    {
        this.router.get("/", auth, ToDoController.index);
        this.router.post("/", auth, validate, ToDoController.create);
        this.router.get("/:id", auth, ToDoController.show);
        this.router.put("/:id", auth, validate, ToDoController.update);
        this.router.delete("/", auth, ToDoController.delete);
    }
}

export default new ToDoRoutes().router;