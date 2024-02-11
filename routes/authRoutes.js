import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { CreateCliente } from "../schemas/validation/CreateCliente.js";
import { AuthUser } from "../schemas/validation/AuthUser.js";


import comentarioController from "../controllers/comentarioController.js";
import conectar from "../authGoogle.js";



const authRouter = Router();
//rotas abertas
authRouter.post(
  "/signup",
  validationSchemaMiddleware(CreateCliente),
  authController.signup
);
authRouter.post(
  "/entrar",
  validationSchemaMiddleware(AuthUser),
  authController.entrar
);
authRouter.post(
  "/entrar",
    conectar
);
authRouter.get("/me", authMiddleware, authController.userLogged); //observar


authRouter.get("/comentario", comentarioController.consultarComentario)


export default authRouter;
