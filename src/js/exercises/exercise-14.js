/* 
* EJERCICIO 14:
! ____________________________________________________
* Muestra un array que solo incluya la pelicula mejor valorada de cada uno de estos actores:
* - Leonardo Dicaprio
* - Robert De Niro
* - Tom Hanks
*/

//* Función para encontrar la película mejor valorada de un actor específico
function mejorPeliculaDeActor(actorNombre) {
    const peliculasDeActor = movies.filter((pelicula) => pelicula.actors.includes(actorNombre));
    if (peliculasDeActor.length === 0) {
      return null;
    }
    return peliculasDeActor.reduce((mejorPelicula, pelicula) =>
      pelicula.rating > mejorPelicula.rating ? pelicula : mejorPelicula
    );
  }
  
  //* Actores
  const actores = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  
  //* Array de las mejores películas de cada actor
  const mejoresPeliculasDeActores = actores.map((actor) => ({
    actor,
    mejorPelicula: mejorPeliculaDeActor(actor),
  }));
  
  //* Filtrar las películas nulas (si un actor no tiene películas en la lista)
  const resultadoFinal = mejoresPeliculasDeActores.filter((item) => item.mejorPelicula !== null);
  
    return "Mejores peliculas de cada actor :\n" 
    + resultadoFinal;
  
 showContent(14, mejoresPeliculasDeActores("Leonardo DiCaprio"));