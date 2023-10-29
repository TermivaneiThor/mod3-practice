/* 
* EJERCICIO 17:
! _______________________________________________________________
* Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
* Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
* "la cadena 'hola mundo' no es un isograma"
*/

function esIsograma(cadena) {
    //* Convertir la cadena a minúsculas para que no distinga entre mayúsculas y minúsculas
    cadena = cadena.toLowerCase();
    
    //* Crear un objeto para contar las ocurrencias de cada letra
    const contador = {};
  
    //* Recorrer la cadena de texto
    for (let letra of cadena) {
      //* Ignorar espacios y otros caracteres no alfabéticos
      if (letra.match(/[a-z]/)) {
        if (contador[letra]) {
          //* Si la letra ya ha sido contada, no es un isograma
          return false;
        } else {
          //* Si la letra no ha sido contada, la contamos
          contador[letra] = 1;
        }
      }
    }
    //* Si no se encontraron letras repetidas, es un isograma
    return true;
  }
  
  // Ejemplo de uso:
  function resultado() {
    const texto = "hola mundo";
    if (esIsograma(texto)) {
      return `La cadena '${texto}' es un isograma.`;
    } else {
      return `La cadena '${texto}' no es un isograma.`;
    }
  }

  showContent(17, resultado());   
  