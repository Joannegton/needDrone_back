import { Router } from "express";
import criarProjetoController from "../controllers/ProjetoController.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { CreateProjeto } from "../schemas/validation/createProjeto.js";



const projetoRouter = Router()


projetoRouter.post(
    "/projeto",
    validationSchemaMiddleware(CreateProjeto), authMiddleware,
    criarProjetoController.create
  );

projetoRouter.get('/projeto',  criarProjetoController.findAll)

projetoRouter.get('/projeto/:id', criarProjetoController.findById)

projetoRouter.put('/projeto/atualizar/:id', criarProjetoController.atualizar)

projetoRouter.delete('/projeto/delete/:id', criarProjetoController.deleted)

export default projetoRouter 