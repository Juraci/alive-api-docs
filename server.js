"use strict";

let express = require('express');
let app = express();
const PORT = 8080;

app.use(express.static(`${__dirname}/public/`));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {name: 'Juraci'});
});

app.listen(PORT, function() {
    console.log(`server listening on ${PORT}`);
});
