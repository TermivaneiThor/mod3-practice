/* 
*EJERCICIO 13:
!________________________________________________________
*Agrupa en un array las peliculas por categorias:
*[
*    {
*        Drama: {
*            {
*                title: "Fight Club",
*                director: "David Fincher",
*                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
*                year: 1999,
*                description:
*                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
*                category: "Drama",
*                rating: 8.8,
*            },
*            Action: {
*                ...
*            },
*            ...
*        }
*    }
*]
*/

const peliculasAgrupadasPorCategoria = {};

movies.forEach((pelicula) => {
  let{ category } = pelicula;

  if (!peliculasAgrupadasPorCategoria[category]) {
    peliculasAgrupadasPorCategoria[category] = [];
  }

  peliculasAgrupadasPorCategoria[category].push(pelicula);
});

const arrayPeliculasPorCategoria = Object.keys(peliculasAgrupadasPorCategoria).map((key) => ({
  [key]: peliculasAgrupadasPorCategoria[key],
}));

return arrayPeliculasPorCategoria;

