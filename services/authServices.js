const db = require('../models/database');

const registrarUsuario = async (dados) => {
    const novoUsuario = { id: Date.now(), nome: dados.nome, email: dados.email, senha: dados.senha };
    db.usuarios.push(novoUsuario);
    return { id: novoUsuario.id, nome: novoUsuario.nome, email: novoUsuario.email };
};

const autenticarUsuario = async ({ email, senha }) => {
    const usuario = db.usuarios.find(u => u.email === email && u.senha === senha);
    if (!usuario) throw new Error('Credenciais inválidas');
    return `token-jwt-ficticio-${usuario.id}`;
};

module.exports = { registrarUsuario, autenticarUsuario };
