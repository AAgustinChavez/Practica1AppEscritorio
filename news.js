const fetch = require('node-fetch');

const today = new Date();

const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const newsApiKey = '4c07073687474d41bd4f33f53add10a3';

module.exports = function(app) {
    app.get('/news', (req, res) => {
        const noticias = req.query;

        fetch(`http://newsapi.org/v2/everything?q=${noticias.busqueda}&from=${date}&sortBy=popularity&apiKey=${newsApiKey}`).then((res)=>{
            return res.json();
        }).then((json)=>{
            res.send(json);
        })
        
    })
};