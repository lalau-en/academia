
const express = require('express');
const app = express();

app.use(express.json());

// Importação das rotas
const authRoutes = require('./routes/authRoutes');
const treinosRoutes = require('./routes/treinosRoutes');
const exerciciosRoutes = require('./routes/exerciciosRoutes');

app.use('/auth', authRoutes);
app.use('/treinos', treinosRoutes);
app.use('/exercicios', exerciciosRoutes);

app.listen(3000, () => {
    console.log('API de Academia rodando na porta 3000');
});
