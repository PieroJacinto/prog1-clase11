// Capturamos la query string de la URL
let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString);

// Obtenemos el valor de búsqueda del formulario
let searchQuery = queryStringToObject.get('q');

// Seleccionamos el elemento donde se mostrarán los resultados
let searchResultsSection = document.querySelector('.search-results');

// URL de la API con el valor de búsqueda
let url = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;

// Hacemos la solicitud fetch a la API
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Procesamos los datos recibidos
        let results = data.results;
        let output = '';

        results.forEach(function(character) {
            output += `
                <article>
                    <img src="${character.image}" alt="${character.name}" />
                    <p>Name: ${character.name}</p>
                    <p>Status: ${character.status}</p>
                </article>
            `;
        });

        // Mostramos los resultados en la sección correspondiente
        searchResultsSection.innerHTML = output;
    })
    .catch(function(error) {
        console.error('Error fetching the data:', error);
        searchResultsSection.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
    });
