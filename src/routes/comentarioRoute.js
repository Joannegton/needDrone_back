import { Router } from "express";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import comentarioController from "../controllers/comentarioController.js";
import { Comentario } from "../schemas/validation/Comentario.js";

const ComentarioRouter = Router()

ComentarioRouter.post(
    "/comentario/criar",
    validationSchemaMiddleware(Comentario),comentarioController.criarComentario
)

ComentarioRouter.get(
    "/comentario",
    comentarioController.consultarComentario
)

ComentarioRouter.delete(
    "/comentario/delete/:id",
    comentarioController.deleteComentario
)





export default ComentarioRouter