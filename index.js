const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/salvarpergunta', (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    res.send(`Titulo:${title} Descricao: ${description}`);
});

app.listen(3333, () => { 
    console.log("Server iniciado");
});