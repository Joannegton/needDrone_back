import { Router } from "express";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import comentarioController from "../controllers/comentarioController.js";
import { Comentario } from "../schemas/validation/Comentario.js";

const criarComentarioRouter = Router()

criarComentarioRouter.post(
    "/comentario",
    validationSchemaMiddleware(Comentario),comentarioController.criarComentario
)


export default criarComentarioRouter