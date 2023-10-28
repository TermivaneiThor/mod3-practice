/* 
* EJERCICIO 3:
! __________________________________________________
* Muestra el siguiente mensaje con el resultado de contar
* el número de vocales que tiene un string:
* “Number of vowels is <result>”
*/

function countVowels(inputString) {
    inputString = inputString.toLowerCase();
  
    //* Utilizamos una expresión regular para buscar 
    //* las vocales y contarlas
    let vowelCount = inputString.match(/[aeiou]/g);
  
    if (vowelCount) {
      //* El resultado es la longitud del array
      //* de vocales encontradas
      let result = vowelCount.length;
      return `Number of vowels is ${result}`;
    } else {
      //* Si no se encontraran vocales, muestra un 
      //* mensaje de cero.
      return "Number of vowels is 0";
    }
  }
  
  //* Ejemplo de uso :
  let inputString = "Hello, World!";
  showContent(3,countVowels(inputString));
  