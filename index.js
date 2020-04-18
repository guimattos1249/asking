const express = require('express');
const app = express();

//dizendo p/ o express usar o EJS como view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3333, () => { 
    console.log("Server iniciado");
});