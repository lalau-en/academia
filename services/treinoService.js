const db = require('../models/database');

const criar = async (dados, usuarioId) => {
    const novoTreino = { id: Date.now(), titulo: dados.titulo, descricao: dados.descricao, usuarioId };
    db.treinos.push(novoTreino);
    return novoTreino;
};

const listarTodos = async () => db.treinos;

const buscarPorId = async (id) => db.treinos.find(t => t.id == id);

const atualizar = async (id, dados) => {
    const index = db.treinos.findIndex(t => t.id == id);
    if (index !== -1) {
        db.treinos[index] = { ...db.treinos[index], ...dados };
        return db.treinos[index];
    }
    return null;
};

const deletar = async (id) => {
    db.treinos = db.treinos.filter(t => t.id != id);
};

module.exports = { criar, listarTodos, buscarPorId, atualizar, deletar };
