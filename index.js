const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Ask = require('./database/Ask');

connection
    .authenticate()
    .then(() => {
        console.log('conexão com o banco de dados feita com sucesso');
    })
    .catch((msg) => {
        console.log(msg);
    });

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Ask.findAll({ raw: true, order: [
        ['id', 'DESC']
    ] }).then(asks => {
        res.render('index', {
            asks
        });
    });
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.get('/question/:id', (req, res) => {
    let id = req.params.id;
    Ask.findOne({
        where: {id}
    }).then(question => {
        if(question != undefined) {
            res.render('question', {
                question
            });
        } else {
            res.redirect('/');
        }
    });
});

app.post('/saveask', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;

    Ask.create({
        title,
        description
    }).then(() => {
        res.redirect('/');
    });
});

app.listen(3333, () => { 
    console.log("Server iniciado");
});