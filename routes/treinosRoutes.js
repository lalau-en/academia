const express = require('express');
const router = express.Router();
const treinosController = require('../controllers/treinosController');
const { verificarToken, verificarDono } = require('../middlewares/authMiddleware');

router.post('/', verificarToken, treinosController.criarTreino);
router.get('/', treinosController.listarTreinos);
router.get('/:id', treinosController.buscarPorId);
router.put('/:id', verificarToken, verificarDono, treinosController.atualizarTreino);
router.delete('/:id', verificarToken, verificarDono, treinosController.deletarTreino);

module.exports = router;
