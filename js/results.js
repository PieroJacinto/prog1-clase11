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

        for (let i = 0; i < results.length; i++) {
            let personaje = results[i];
            output += `
                <article>
                    <img src="${personaje.image}" alt="${personaje.name}" />
                    <p>Name: ${personaje.name}</p>
                    <p>Status: ${personaje.status}</p>
                </article>
            `;
        }
        // Mostramos los resultados en la sección correspondiente
        searchResultsSection.innerHTML = output;
    })
    .catch(function(error) {
        console.error('Error en el fetch:', error);
        searchResultsSection.innerHTML = '<p>Lo siento, algo salio mal! intentalo de nuevo mas tarde.</p>';
    });
