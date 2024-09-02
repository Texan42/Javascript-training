// function deleteMovie(e) { // e -> event
//     const xhr = new XMLHttpRequest();
//     xhr.onload = function() {
//         e.target.value = null;
//     }
//     xhr.open('DELETE', `/movies/${e.target.value}`);
//     xhr.send();

// }

function getMovies() {
    //AJAX -> asynchronous javascript and XML
    const xhr = new XMLHttpRequest();
    xhr.onload = function() { //callback function that will be called later
        const movies = JSON.parse(xhr.response);
        const movieContainer = document.getElementById('movies');
        console.log(movies);
        if (xhr.status === 200){
            //title, director, year unpack data
            for(movie of movies){
                const div = document.createElement('div');
                div.innerText = `title: ${movie.title}\n director: ${movie.director}\n year: ${movie.year}\n\n`
                movieContainer.append(div);
            }
        }else{
            //handles error
            movieContainer.innerText = `${movies.error}`;
        }
    }
    xhr.open('GET', '/movies');
    xhr.send();
}

    window.addEventListener('DOMContentLoaded', () => {
        getMovies();
    })