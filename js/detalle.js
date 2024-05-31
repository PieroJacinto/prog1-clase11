// detalle gif

let queryString = location.search; // Capturamos la query string
let queryStringToObject = new URLSearchParams(queryString); // La transformamos en un objeto URLSearchParams
let id = queryStringToObject.get('id');
console.log("id personaje", id);
let url = `https://rickandmortyapi.com/api/character/${id}`;

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Mostramos los datos en las nuevas etiquetas HTML
        let nombreElement = document.querySelector('.nombre-personaje');
        let statusElement = document.querySelector('.status');
        let especieElement = document.querySelector('.especie');
        let imagenElement = document.querySelector('.imagen-personaje');

        // puede ser con textContent tb
        nombreElement.innerText = data.name;
        statusElement.innerText += data.status;
        especieElement.innerText += data.species;
        imagenElement.src = data.image;
        imagenElement.alt = `Imagen de ${data.name}`;
    })
    .catch(function (error) {
        console.log(error);
    });
