const treinoService = require('../services/treinoService');

const criarTreino = async (req, res) => {
    try {
        const treino = await treinoService.criar(req.body, req.usuario.id);
        res.status(201).json(treino);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};

const listarTreinos = async (req, res) => {
    const treinos = await treinoService.listarTodos();
    res.status(200).json(treinos);
};

const buscarPorId = async (req, res) => {
    const treino = await treinoService.buscarPorId(req.params.id);
    if (!treino) return res.status(404).json({ erro: 'Treino não encontrado' });
    res.status(200).json(treino);
};

const atualizarTreino = async (req, res) => {
    const atualizado = await treinoService.atualizar(req.params.id, req.body);
    res.status(200).json(atualizado);
};

const deletarTreino = async (req, res) => {
    await treinoService.deletar(req.params.id);
    res.status(204).send();
};

module.exports = { criarTreino, listarTreinos, buscarPorId, atualizarTreino, deletarTreino };
