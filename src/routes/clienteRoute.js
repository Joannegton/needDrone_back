import { Router } from "express";
import ClienteController from "../controllers/clienteController.js";
import { CreateCliente } from "../schemas/validation/CreateCliente.js";
import { validationSchemaMiddleware } from "../middlewares/validationSchemaMiddleware.js";

const ClienteRouter = Router();

// Endpoint para cadastro de cliente
ClienteRouter.post(
    "/cliente/cadastro",
    validationSchemaMiddleware(CreateCliente),
    ClienteController.criarCliente
);


ClienteRouter.get('/cliente', ClienteController.findAllUser);

ClienteRouter.get('/cliente/:id', ClienteController.findById);

ClienteRouter.put('/cliente/atualizar/:_id', ClienteController.update);

ClienteRouter.delete('/cliente/delete/:_id', ClienteController.deleted);


export default ClienteRouter;
