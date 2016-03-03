/*jshint esversion: 6 */

class Request {
    constructor(options = {}) {
        this.req = new XMLHttpRequest();
        let defaults = {
            baseUrl: 'http://localhost:3000',
            route: 'tweets',
            person: 'sandimetz'
        };

        let settings = Object.assign({}, defaults, options);

        this.req.onload = function() {
            console.log(this.responseText);
        };

        this.req.open('get', `${settings.baseUrl}/${settings.route}/${settings.person}`, true);

    }

    send() {
        this.req.send();
    }
}

let element = document.getElementById('check');
element.addEventListener('click', function() {
    let req = new Request();
    req.send();
});
