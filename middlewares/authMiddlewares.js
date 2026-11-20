const db = require('../models/database');

// Verifica se o usuário está autenticado (logado)
const verificarToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Formato: "Bearer token..."

    if (!token) {
        return res.status(401).json({ erro: 'Acesso negado. Token não fornecido.' });
    }

    // Extrai o ID do token fictício gerado no authService (ex: "token-jwt-ficticio-12345")
    const idUsuario = token.replace('token-jwt-ficticio-', '');
    const usuario = db.usuarios.find(u => u.id == idUsuario);

    if (!usuario) {
        return res.status(403).json({ erro: 'Token inválido ou expirado.' });
    }

    req.usuario = usuario; // Salva os dados do usuário na requisição para usar depois
    next(); // Libera a passagem para o controller
};

// Verifica se o treino pertence ao usuário logado antes de editar/deletar
const verificarDono = (req, res, next) => {
    const treinoId = req.params.id;
    const treino = db.treinos.find(t => t.id == treinoId);

    if (!treino) {
        return res.status(404).json({ erro: 'Treino não encontrado.' });
    }

    if (treino.usuarioId !== req.usuario.id) {
        return res.status(403).json({ erro: 'Permissão negada. Você não é o dono deste treino.' });
    }

    next();
};

module.exports = { verificarToken, verificarDono };
