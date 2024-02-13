import express, { json } from "express";
import cors from "cors";
import { connectDb } from "./config/database.js";
import authRouter from "./routes/authRoutes.js";
import PilotoRouter from "./routes/pilotoRoute.js";
import transactionRouter from "./routes/transactionRoutes.js";
import ClienteRouter from "./routes/clienteRoute.js";
import projetoRouter from "./routes/ProjetosRoutes.js";
import ComentarioRouter from "./routes/comentarioRoute.js";
import droneRouter from "./routes/droneRoute.js";
import propostaRouter from "./routes/propostaRoute.js";
import ImagemRouter from "./routes/imagensRoute.js";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDb();
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(ComentarioRouter)
app.use(projetoRouter)
app.use(droneRouter)
app.use(ImagemRouter)
app.use(PilotoRouter)
app.use(ClienteRouter)
app.use(propostaRouter)

app.use(transactionRouter)

const port = 5000;
app.listen(port, () => console.log(`Server listening in port ${port}`));

export default app;
