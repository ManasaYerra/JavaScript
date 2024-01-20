document.addEventListener('DOMContentLoaded', function() {
    fetch('./user.json')
        .then(response => response.json())
        .then(data => {
            console.log(data[1].name);
            const displayElement = document.getElementById('json-content');
            displayElement.textContent = data[1].name;
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
            document.getElementById('json-content').textContent = 'Failed to load JSON data';
        });
});
