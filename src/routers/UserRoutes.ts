import BaseRoute from "./BaseRoute";
// controllers
import UserController from "../controllers/UserController";

class UserRoutes extends BaseRoute 
{
    public routes(): void 
    {
        this.router.get("/",  UserController.index);
        this.router.get("/:id", UserController.show);
        this.router.post("/", UserController.create);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);
    }
}

export default new UserRoutes().router;