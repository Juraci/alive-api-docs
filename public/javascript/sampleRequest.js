var element = document.getElementById('check');
element.addEventListener('click', function() {
    var request = require('request');
    request('http://localhost:3000/tweets/sandimetz', function(error, response, body) {
        if(error) {
            throw error;
        }
        console.log(response.statusCode);
        console.log(body);
    });
});
