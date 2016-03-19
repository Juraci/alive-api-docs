var aliveExample = document.querySelector('.alive-example');

var button = document.getElementById('execute-snippet');
button.addEventListener('click', function() {
    eval(aliveExample.textContent);
});
