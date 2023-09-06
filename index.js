const express = require('express');
const bodyParser = require('body-parser');
const cherrio = require('cheerio');
const axios = require('axios');


const app = express();
const PORT = 8000;
const urlencodedparser = bodyParser.urlencoded({extended:false});

app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render('index', { result: '' });
});

app.post('/send-url', urlencodedparser, async (req, res) => {
    let url = req.body.myurl;
    res.send('worked form');

    await ( async()=>{
        // const response = await axios.get(url);
        console.log(url);
        // const $ = cherrio.load(response.data);
        // const title = $('h1').text();
        // console.log(title);
    })();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
