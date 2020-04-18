const express = require('express');
const app = express();

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let nome = 'Guilherme';
    let lang = 'JS';
    res.render('index', {
        nome,
        lang,
        empresa: 'ABC71'
    });
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/profile', (req, res) => {
    res.render('principal/profile');
});

app.listen(3333, () => { 
    console.log("Server iniciado");
});