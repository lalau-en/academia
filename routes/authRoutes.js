const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/authMiddleware');

router.post('/cadastro', (req, res) => res.status(201).json({ mensagem: 'Usuário cadastrado' }));
router.post('/login', (req, res) => res.status(200).json({ token: 'token_exemplo' }));
router.get('/perfil', verificarToken, (req, res) => res.status(200).json({ perfil: 'Dados do usuário' }));

module.exports = router;
