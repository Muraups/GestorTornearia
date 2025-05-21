import express from 'express';
import Servico from '../models/Servico.js';

const router = express.Router();

// Criar
router.post('/', async (req, res) => {
  try {
    const novoServico = await Servico.create(req.body);
    res.status(201).json(novoServico);
  } catch (err) {
    res.status(400).json({ erro: err.message });
  }
});

// Listar todos
router.get('/', async (req, res) => {
  const servicos = await Servico.find();
  res.json(servicos);
});

// Atualizar
router.put('/:id', async (req, res) => {
  const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(servico);
});

// Deletar
router.delete('/:id', async (req, res) => {
  await Servico.findByIdAndDelete(req.params.id);
  res.json({ msg: "Serviço removido com sucesso" });
});

export default router;
