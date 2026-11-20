const db = require('../models/database');

const criar = async (dados) => {
    const novoExercicio = {
        id: Date.now(),
        nome: dados.nome,
        series: dados.series,
        repeticoes: dados.repeticoes,
        treinoId: dados.treinoId
    };
    db.exercicios.push(novoExercicio);
    return novoExercicio;
};

const listarTodos = async () => db.exercicios;

const atualizar = async (id, dados) => {
    const index = db.exercicios.findIndex(e => e.id == id);
    if (index !== -1) {
        db.exercicios[index] = { ...db.exercicios[index], ...dados };
        return db.exercicios[index];
    }
    return null;
};

const deletar = async (id) => {
    db.exercicios = db.exercicios.filter(e => e.id != id);
};

module.exports = { criar, listarTodos, atualizar, deletar };
