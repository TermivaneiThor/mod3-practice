/* 
* EJERCICIO 4:
! ___________________________________
* Muestra el resultado de quitar las vocales a un string
* que pasamos como parámetro:
* “H, m lrnng Jvscrpt” // string original: 
* “Hi, I am learning Javascript”
*/

function removeVowels(inputString2) {
    let result = inputString2.replace(/[aeiouAEIOU]/g, "");
  
    return result;
  }
  
  let inputString2 = "Hi, I am learning Javascript";
  showContent(4,removeVowels(inputString2));
  