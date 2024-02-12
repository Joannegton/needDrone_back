import express, { json } from "express";
import cors from "cors";

import { connectDb } from "./config/database.js";
import authRouter from "./routes/authRoutes.js";
import criarPilotoRouter from "./routes/pilotoRoute.js";
import transactionRouter from "./routes/transactionRoutes.js";
import criarClienteRouter from "./routes/clienteRoute.js";
import projetoRouter from "./routes/ProjetosRoutes.js";
import criarComentarioRouter from "./routes/comentarioRoute.js";
import droneRouter from "./routes/droneRoute.js";
import propostaRouter from "./routes/propostaRoute.js";
const app = express();

connectDb();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(criarComentarioRouter)
app.use(projetoRouter)
app.use(droneRouter)
app.use(criarPilotoRouter)
app.use(criarClienteRouter)
app.use(propostaRouter)

app.use(transactionRouter)


const port = 5000;
app.listen(port, () => console.log(`Server listening in port ${port}`));

export default app