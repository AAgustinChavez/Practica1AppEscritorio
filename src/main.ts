declare var Handlebars:any;

const today = new Date();

const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const newsApiKey = '4c07073687474d41bd4f33f53add10a3';

// console.log(date);

function getData(noticias:string){

    var url = 'http://localhost:3000/news';

    var req = new Request(url);

    fetch(req)
        .then(response => response.json())
        .then(info => {
                console.log(info);
                const templateSource = document.getElementById('news-template').innerHTML;
                const template = Handlebars.compile(templateSource);
                document.getElementById('news-template').innerHTML = template({
                    news: info.articles
                });
        });
}

function getValue(){ 
    var noticias = (<HTMLInputElement>document.querySelector("#busqueda")).value;
    console.log(noticias);
    getData(noticias);
}