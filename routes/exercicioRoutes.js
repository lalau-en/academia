const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/exerciciosController');
const auth = require('../middlewares/authMiddleware');

router.post('/', auth, ctrl.criarExercicio);       // Criar
router.get('/', auth, ctrl.listarExercicios);      // Listar
router.get('/:id', auth, ctrl.detalharExercicio);  // Detalhar
router.put('/:id', auth, ctrl.atualizarExercicio); // Atualizar
router.delete('/:id', auth, ctrl.excluirExercicio);// Excluir

module.exports = router;
