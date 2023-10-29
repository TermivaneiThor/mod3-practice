/* 
*EJERCICIO 15:
! ______________________________________________________
*Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
*siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/

//* Calcular la valoración media de todas las películas
const sumaValoraciones = movies.reduce((total, pelicula) => total + pelicula.rating, 0);
const valoracionMedia = sumaValoraciones / movies.length;

//* Filtrar las películas mejor valoradas (superiores a la media)
const mejoresPeliculas = movies.filter((pelicula) => pelicula.rating > valoracionMedia);

//* Ordenar las películas mejor valoradas de mejor a peor
mejoresPeliculas.sort((a, b) => b.rating - a.rating);

//* Crear un nuevo array con el título y la descripción de las películas mejor valoradas
const mejoresPeliculasInfo = mejoresPeliculas.map((pelicula) => ({
  title: pelicula.title,
  description: pelicula.description,
}));

function resultado() {
    return "Mejores películas (superiores a la valoración media):\n" + mejoresPeliculasInfo;
}

showContent(15, searchBestFilmTopMedia(resultado()));