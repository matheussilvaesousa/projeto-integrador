const express = require('express');
const app = express();
const port = 3333;
const path = require('path');

//Rotas instanciadas
const perfilRouter = require('./routes/perfilRouter');

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('index', {
        title: "Projeto Integrador MobMap",
        version: "0.0.0"
    });
});

app.use('/perfil', perfilRouter);



// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

app.listen(port, err => {
    console.log(`Servidor rodando na porta ${port}`);
});