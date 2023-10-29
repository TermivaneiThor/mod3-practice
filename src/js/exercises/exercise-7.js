/* 
* EJERCICIO 7:
! _______________________________________________________
* Escribir una función que calcule si una cadena de texto
* es un palíndromo y devuelva un mensaje con la cadena de 
* texto y el resultado
*/

function esPalindromo(cadena) {
    //* Eliminamos los espacios y convertimos la cadena a minúsculas para hacer la comparación más precisa.
    let cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');
  
    //* Invertimos la cadena para compararla con la original.
    let cadenaInvertida = cadenaLimpia.split('').reverse().join('');
  
    //* Comparamos la cadena original con la cadena invertida para determinar si es un palíndromo.
    if (cadenaLimpia === cadenaInvertida) {
      return `${cadena} es un palíndromo.`;
    } else {
      return `${cadena} no es un palíndromo.`;
    }
  }
  
  //* Ejemplo de uso:
  let resultado = esPalindromo("Anilina");
  showContent(7, resultado); //* Output: "Anilina es un palíndromo."
  