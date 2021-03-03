const express = require('express');
const fs = require('fs');
const path = require('path');
const { clearScreenDown } = require('readline');

const news = require('./news');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'dist')));

app.use('/', (req, res, next) => {
    console.log('Endpoint tras middleware');
    next();
})

app.get('/', (req, res) => {
    console.log('Query Params: ', req.query);
    const indexFile = fs.readFileSync('./dist/views/index.html');
    res.end(indexFile);
});

app.get('/test', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    console.log('Ocurrió una petición!');
    res.end('Pagina de Test!');
});

app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

news(app);

app.listen(3000, ()=>{
    console.log('app is running in port 3000');
});