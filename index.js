const express = require('express');
const port = 3333;
const app = express();

app.get('/', (req, res, next) => {
    res.send({
        title:"Projeto Integrador",
        version:"0.0.0"
    });
});

app.listen(port, err => {
    console.log(`Servidor rodando na porta ${port}` );
});