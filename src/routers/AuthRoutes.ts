import BaseRoute from "./BaseRoute";
import validate from "../middlewares/AuthValidator";
// controllers
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoute 
{
    public routes(): void 
    {
        this.router.post("/register", validate, AuthController.register);
        this.router.post("/login", validate, AuthController.login);
    }
}

export default new AuthRoutes().router;