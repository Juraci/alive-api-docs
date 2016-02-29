var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {name: 'Juraci'});
});

app.listen(8080, function() {
    console.log('server listening on 8080');
});
