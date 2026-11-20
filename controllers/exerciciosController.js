const db = require('../models/database');

const criarExercicio = (req, res) => {
    const { nome, grupoMuscular } = req.body;
    const novo = { id: String(Date.now()), nome, grupoMuscular };
    db.exercicios.push(novo);
    return res.status(201).json(novo);
};

const listarExercicios = (req, res) => {
    return res.json(db.exercicios);
};

const detalharExercicio = (req, res) => {
    const item = db.exercicios.find(e => e.id === req.params.id);
    if (!item) return res.status(404).json({ erro: 'Não encontrado' });
    return res.json(item);
};

const atualizarExercicio = (req, res) => {
    const index = db.exercicios.findIndex(e => e.id === req.params.id);
    if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });
    db.exercicios[index] = { ...db.exercicios[index], ...req.body };
    return res.json(db.exercicios[index]);
};

const excluirExercicio = (req, res) => {
    const index = db.exercicios.findIndex(e => e.id === req.params.id);
    if (index === -1) return res.status(404).json({ erro: 'Não encontrado' });
    db.exercicios.splice(index, 1);
    return res.json({ mensagem: 'Excluído com sucesso' });
};

module.exports = {
    criarExercicio,
    listarExercicios,
    detalharExercicio,
    atualizarExercicio,
    excluirExercicio
};
