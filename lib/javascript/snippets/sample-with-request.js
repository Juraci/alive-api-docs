var snippet = `request('http://localhost:3000/tweets/sandimetz', function(error, response, body) {
        var aliveResponseStatus = document.querySelector('.alive-response-status');
        var aliveResponseBody = document.querySelector('.alive-response-body');
        if(error) {
            aliveResponseStatus.textContent = error;
        } else {
            aliveResponseStatus.textContent = response.statusCode;
            aliveResponseBody.textContent = body;
        }
    });`;

var snippetElement = document.querySelector('.alive-example');
snippetElement.textContent = snippet;
