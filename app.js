document.addEventListener("DOMContentLoaded", function (event) {
    var menuB = document.getElementById('menuButton');
    var backB = document.getElementById('backButton');
    var selectB = document.getElementById('selectButton');
    var forwardB = document.getElementById('forwardButton');
    var playpauseB = document.getElementById('playpauseButton');

    var screen = document.getElementById('display');

    menuB.addEventListener('click', function() {
        console.log('menu');

        // screen.textContent += event.target[0].id;
    });
    backB.addEventListener('click', function() {
        console.log('back');
    });
    selectB.addEventListener('click', function() {
        console.log('select');
    });
    forwardB.addEventListener('click', function() {
        console.log('forward');
    });
    playpauseB.addEventListener('click', function() {
        console.log('play | pause');

        // add code to toggle button icon
    });
});