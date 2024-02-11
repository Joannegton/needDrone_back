import jwt from "jsonwebtoken";
import pilotoRepository from "../repositories/pilotoRepository.js";
import clienteRepository from "../repositories/clienteRepository.js";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ message: "Invalid token" });
  }

  const [schema, token] = authorization.split(" ");

  if (schema !== "Bearer" || !token) {
    return res.status(401).send({ message: "Invalid token" });
  }

  try {
    const decode = jwt.verify(token, "84c2109279e6cde7b262d3c2d1941ec950d006aa7712ddbbc6cd2791aa49c46f");

    let user = await clienteRepository.findById(decode.id);
    let piloto;

    if (!user) {
      piloto = await pilotoRepository.findById(decode.id);
      if (!piloto) {
        return res.status(401).send({ message: "User and Piloto not found" });
      }
      res.locals.piloto = piloto;
    } else {
      res.locals.user = user;
    }

    next();
  } catch (err) {
    console.error("Error verifying JWT token:", err);
    return res.status(401).send({ message: "Invalid token" });
  }
}
