const http = require('http');
const express = require('express');
const app = express();
app.use(require('cors')());

app.get('/', (req, res, next) => {
    res.json({ message: "API está executando."})
});

app.get('/estados', (req, res, next) => {
    console.log("Estados disponíveis:")
    const estados = [
        
        {id: 1, uf: 'AC'}, 
        {id: 2, uf: 'AL'}, 
        {id: 3, uf: 'AP'}, 
        {id: 4, uf: 'AM'}, 
        {id: 5, uf: 'BA'}, 
        {id: 6, uf: 'CE'},
        {id: 7, uf: 'ES'},
        {id: 8, uf: 'GO'},
        {id: 9, uf: 'MA'},
        {id: 10, uf: 'MT'},
        {id: 11, uf: 'MS'},
        {id: 12, uf: 'MG'},
        {id: 13, uf: 'PA'},
        {id: 14, uf: 'PB'},
        {id: 15, uf: 'PR'},
        {id: 16, uf: 'PE'},
        {id: 17, uf: 'PI'},
        {id: 18, uf: 'RJ'},
        {id: 19, uf: 'RN'},
        {id: 20, uf: 'RS'},
        {id: 21, uf: 'RO'},
        {id: 22, uf: 'RR'},
        {id: 23, uf: 'SC'},
        {id: 24, uf: 'SP'},
        {id: 25, uf: 'SE'},
        {id: 26, uf: 'TO'},
        {id: 27, uf: 'DF'}
    ];
    res.json(estados);
})


const server = http.createServer(app);
server.listen((3030));
console.log("Servidor está sendo executado na porta 3030.")