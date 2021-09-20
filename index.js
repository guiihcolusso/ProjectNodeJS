const config = require('./jsons/config.json')
const express = require('express');
const path = require('path');
const server = express();


server.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, '/paginas/index.html'));

});

server.get('/*', (req, res) => {

    res.send('404 - A página não foi encontrada')

});


server.listen(config.PORT, config.IP, () => {

    console.log('Servidor Inicializado com Sucesso :)');

});
