const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(location.href + '?' + new URLSearchParams({ url: document.getElementById('url').value }))
        .then(response => response.text())
        .then(data => {
            result.innerHTML = data;
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});
