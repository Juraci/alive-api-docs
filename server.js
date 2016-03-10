/*jshint esversion: 6 */

var makeServer = function() {
    "use strict";

    let express = require('express');
    let app = express();
    const PORT = 8080;

    app.use(express.static(`${__dirname}/public/`));
    app.set('view engine', 'ejs');

    app.get('/', function(req, res) {
        res.render('pages/index');
    });

    let server = app.listen(PORT, "0.0.0.0", function() {
        console.log(`server listening on ${PORT}`);
    });

    return server;
};

module.exports = makeServer;
