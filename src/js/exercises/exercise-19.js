/* 
* EJERCICIO 19:
! ________________________________________________________________
* Dada una cadena de texto, crea una función que devuelva un objeto donde
* las claves (keys) son cada una de las letras de la cadena y el valor el
* número de veces que se repite cada una de ellas.
* Ejemplo: "Hello world"
* {
*     h: 1,
*     e: 1,
*     l: 3,
*     o: 2,
*     r: 1,
*     d: 1,
* }
* Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

function contarLetras(cadena) {
    //* Convierte la cadena a minúsculas y elimina espacios y tildes
    cadena = cadena.toLowerCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    //* Crea un objeto para almacenar la frecuencia de cada letra
    const frecuenciaLetras = {};
  
    //* Recorre la cadena de texto
    for (let letra of cadena) {
      if (letra.match(/[a-z]/)) {
        //* Si es una letra válida, aumenta su frecuencia
        frecuenciaLetras[letra] = (frecuenciaLetras[letra] || 0) + 1;
      }
    }
    return frecuenciaLetras;
  }
  
  //* Ejemplo de uso:
  function resultado() {
    const texto = "Hello world";
    const frecuencia = contarLetras(texto);
    return frecuencia;
  }

  showContent(19, resultado());
  