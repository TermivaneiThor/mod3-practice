/* 
* EJERCICIO 5:
! _________________________________________________________
*Escribe una función llamada "repetitions" que recibe
*de entrada una cadena de texto y 
*devuelve otra cadena con cada letra repetida tantas veces
*como la posición que ocupa  empezando la primera *repetición en mayúscula y el resto en minúscula

*Ejemplos:
* repetitions(‘code’) 
! result: “COoDddEeee”

* repetitions(‘list’) 
! result: “LIiSssTttt”

* repetitions(function) 
! result: “FUuNnnTtttIiiiiOoooooNnnnnnn”
*/

function repetitions(text) {
    if (typeof text !== 'string') {
      return "Por favor, introduzca una cadena de texto válida.";
    }
  
    let result = "";
    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      result += char.toUpperCase();
  
      for (let j = 0; j < i; j++) {
        result += char.toLowerCase();
      }
  
      if (i < text.length - 1) {
        result += char; 
      }
    }
    return result;
  }
  
  //* Ejemplos de uso:
  //showContent(5,repetitions('code'));
  //showContent(5,repetitions('list'));
  showContent(5,repetitions('function'));