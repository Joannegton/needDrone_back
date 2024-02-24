import { Router } from "express";
import PilotoController from "../controllers/PilotoController.js";
import { CreatePiloto } from "../schemas/validation/CreatePilotoValidate.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";

const PilotoRouter = Router()

PilotoRouter.post(
    "/piloto/cadastro",
    validationSchemaMiddleware(CreatePiloto),
    PilotoController.criarPiloto
)

PilotoRouter.get('/piloto', PilotoController.findAllUser)
PilotoRouter.get('/piloto/:id', PilotoController.findById)

PilotoRouter.put('/piloto/atualizar/:id', PilotoController.update)

PilotoRouter.delete('/piloto/delete/:id', PilotoController.deleted)

export default PilotoRouter;