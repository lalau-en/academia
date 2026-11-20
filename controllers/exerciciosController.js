const exercicioService = require('../services/exercicioService');

const criarExercicio = async (req, res) => {
    try {
        const exercicio = await exercicioService.criar(req.body);
        res.status(201).json(exercicio);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};

const listarExercicios = async (req, res) => {
    const exercicios = await exercicioService.listarTodos();
    res.status(200).json(exercicios);
};

const atualizarExercicio = async (req, res) => {
    const atualizado = await exercicioService.atualizar(req.params.id, req.body);
    res.status(200).json(atualizado);
};

const deletarExercicio = async (req, res) => {
    await exercicioService.deletar(req.params.id);
    res.status(204).send();
};

module.exports = { criarExercicio, listarExercicios, atualizarExercicio, deletarExercicio };
