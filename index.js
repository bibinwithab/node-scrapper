const express = require('express');
const bodyParser = require('body-parser');
const cherrio = require('cheerio');
const axios = require('axios');

const app = express();
const PORT = 8000;
const urlencodedparser = bodyParser.urlencoded({extended:false});

app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render('index',{ price:'' , name:'' });
});

app.post('/send-url', urlencodedparser, async (req, res) => {
    let url = req.body.myurl;
    
    axios(url)
    .then(response => {
        const html = response.data;
        const $ = cherrio.load(html);
        const prices = $('div.our_price');
        const names = $('h1.like-h3');
        console.log(names.text());
        console.log(prices.text());
        res.render('index', { price: prices.text(), name:names.text() });

    })
    .catch(err => console.log(err))
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
