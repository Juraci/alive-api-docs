var snippet = `request('http://localhost:3000/tweets/sandimetz', function(error, response, body) {\n
        if(error) {\n
            throw error;\n
        }\n
        console.log(response.statusCode);\n
        console.log(body);\n
    });\n`;

var snippetElement = document.querySelector('.alive-example');
snippetElement.textContent = snippet;
