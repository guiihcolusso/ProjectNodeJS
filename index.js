const config = require('./jsons/config.json')
const express = require('express');
const path = require('path');
const server = express();


server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/paginas/index.html'));

});

server.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, '/paginas/404.html'));

});


server.listen(config.PORT, config.IP, () => {

    console.log('Servidor Inicializado com Sucesso :)');

});