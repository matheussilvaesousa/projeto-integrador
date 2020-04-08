const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('perfil');
});

router.get('/alterar', (req, res) => {
    res.render('alterarPerfil');
});

module.exports = router;