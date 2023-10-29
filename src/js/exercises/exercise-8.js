/* 
* EJERCICIO 8:
! ______________________________________________________
* Escribe una o varias funciones para que, dado un string, * devuelva un array que contenga la posición 
* que ocupa cada carácter en el abecedario. 
* Para que sea más sencillo, elimina los espacios y tildes 
*(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

function posicionEnAbecedario(cadena) {
    //* Eliminamos los espacios y tildes y convertimos a minúsculas
    let cadenaLimpia = cadena.replace(/[\sáéíóúü]/g, '').toLowerCase();
  
    //* Crear un array para almacenar las posiciones de los caracteres
    let posiciones = [];
  
    //* Recorremos la cadena y calculamos la posición de cada carácter
    for (let i = 0; i < cadenaLimpia.length; i++) {
      let char = cadenaLimpia[i];
      //* Usamos charCodeAt para obtener el código ASCII del carácter y restamos 96 para obtener la posición en el abecedario
      let posicion = char.charCodeAt(0) - 96;
      posiciones.push(posicion);
    }
  
    return posiciones;
  }
  
  //* Ejemplo de uso:
  let resultado = posicionEnAbecedario("Hola Mundo");
  showContent(8, resultado);
  
