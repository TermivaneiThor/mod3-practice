/* 
* EJERCICIO 16:
! _______________________________________________________________
* Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function sigloDelAnio(anio) {
    //* Calcula el siglo redondeando hacia arriba
    const siglo = Math.ceil(anio / 100);
    return siglo;
  }
  
  //* Ejemplo de uso:
  const anio = 2023;
  const siglo = sigloDelAnio(anio);
  function resultado() {
    return `El año ${anio} pertenece al siglo ${siglo}`;
  }
  
  showContent(16, resultado());