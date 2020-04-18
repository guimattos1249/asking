const express = require('express');
const app = express();

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let msg = false;
    res.render('index', {
        nome,
        lang,
        empresa: 'ABC71',
        msg
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