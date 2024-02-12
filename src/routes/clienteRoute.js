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

// Endpoint para buscar todos os clientes
ClienteRouter.get('/cliente', ClienteController.findAllUser);

// Endpoint para buscar cliente por ID
ClienteRouter.get('/cliente/:id', ClienteController.findById);

// Endpoint para atualizar cliente
ClienteRouter.put('/cliente/atualizar/:_id', ClienteController.update);


export default ClienteRouter;
