console.log("script.js ready");
document.addEventListener("DOMContentLoaded", function() {
    fetch('header/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
});