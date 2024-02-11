import PilotoSchema from "../schemas/PilotoUser.js";
import ClienteSchema from "../schemas/ClienteUser.js";

async function consultarPilotos(req, res) {
  try {
    const pilotos = await PilotoSchema.find();
    res.json(pilotos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar pilotos do banco de dados.' });
  }
}

//consultar piloto por nome
async function consultarPilotoPorNome(req, res) {
  const { name } = req.params; // Supondo que o name seja passado como um parâmetro na URL

  try {
    const piloto = await PilotoSchema.findOne({ name });

    if (!piloto) {
      return res.status(404).json({ error: 'Piloto não encontrado.' });
    }

    res.json(piloto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar piloto do banco de dados.' });
  }
}


async function consultarClientes(req, res) {
  try {
    const clientes = await ClienteSchema.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar clientes do banco de dados.' });
  }
}

async function consultarClientePorEmail(req, res) {
  const { email } = req.params; // Supondo que o name seja passado como um parâmetro na URL

  try {
    const piloto = await ClienteSchema.findOne({ email });

    if (!piloto) {
      return res.status(404).json({ error: 'Cliente não encontrado.' });
    }

    res.json(piloto);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao recuperar Cliente do banco de dados.' });
  }
}

export default { consultarPilotos, consultarPilotoPorNome, consultarClientes, consultarClientePorEmail };

