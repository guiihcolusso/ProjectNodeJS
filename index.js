const configs = require('./jsons/config.json');
const express = require('express');
const handlebars = require('express-handlebars');
const server = express();

server.engine('handlebars', handlebars({defaultLayout : 'main'}));
server.set('view engine', 'handlebars');

server.get('/', (req, res) =>{

    res.render('inicio');

});

server.get('/sobre', (req, res) =>{

    res.render('sobre');

});

server.get('/*', (req, res) =>{

    res.render('Erro404');

});

server.listen(configs.PORT, configs.IP, () =>{

    console.log('Servidor Inicializado com Sucesso :)');

});