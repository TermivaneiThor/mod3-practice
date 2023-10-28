/* 
* EJERCICIO 4:
! ___________________________________
* Muestra el resultado de quitar las vocales a un string
* que pasamos como parámetro:
* “H, m lrnng Jvscrpt” // string original: 
* “Hi, I am learning Javascript”
*/

function removeVowels(inputString) {
    let result = inputString.replace(/[aeiouAEIOU]/g, "");
  
    console.log(result);
  }
  
  let inputString = "Hi, I am learning Javascript";
  showContent(4,removeVowels(inputString));
  