const express = require('express');
const app = express();

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get('/:nome/:lang', (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let msg = true;

    let produtos = [
        {nome: 'doritos', preco: 1.14},
        {nome: 'coca', preco: 5},
        {nome: 'alface', preco: 0.50}
    ]
    
    res.render('index', {
        nome,
        lang,
        empresa: 'ABC71',
        msg,
        produtos
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