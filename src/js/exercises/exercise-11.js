/* 
*EJERCICIO 11:
! ______________________________________________________
*Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/

const orderFimls = (movies) => { 
    return movies.sort((a, b) => b.rating - a.rating);
}

showContent(11, orderFimls(movies));