import BaseRoute from "./BaseRoute";
// controllers
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoute 
{
    public routes(): void 
    {
        this.router.post("/register", AuthController.index);
        this.router.post("/login", AuthController.create );
    }
}

export default new AuthRoutes().router;