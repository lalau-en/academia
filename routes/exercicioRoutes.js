const express = require('express');
const router = express.Router();
const { verificarToken, verificarDono } = require('../middlewares/authMiddleware');

router.post('/', verificarToken, (req, res) => res.status(201).json({ mensagem: 'Exercício criado' }));
router.get('/', (req, res) => res.status(200).json([]));
router.get('/:id', (req, res) => res.status(200).json({}));
router.put('/:id', verificarToken, verificarDono, (req, res) => res.status(200).json({ mensagem: 'Exercício atualizado' }));
router.delete('/:id', verificarToken, verificarDono, (req, res) => res.status(204).send());

module.exports = router;
