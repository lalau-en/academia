const authService = require('../services/authService');

const cadastrar = async (req, res) => {
    try {
        const novoUsuario = await authService.registrarUsuario(req.body);
        res.status(201).json(novoUsuario);
    } catch (erro) {
        res.status(400).json({ erro: erro.message });
    }
};

const login = async (req, res) => {
    try {
        const token = await authService.autenticarUsuario(req.body);
        res.status(200).json({ token });
    } catch (erro) {
        res.status(401).json({ erro: erro.message });
    }
};

const perfil = (req, res) => {
    res.status(200).json({ usuario: req.usuario });
};

module.exports = { cadastrar, login, perfil };
