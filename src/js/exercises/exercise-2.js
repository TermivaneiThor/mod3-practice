/* 
* EJERCICIO 2:
! ______________________________________________
* Muestra el siguiente mensaje dependiendo de si 
* un número es par o impar:
* “Number 34 is even” ó “Number 13 is odd”
*/

//* Definimos un número :
let number = 34;
let result = "";

//* Comprobamos mediante una condicional si es
//* par o impar:
function evenOrOdd(number) { 
    if (number % 2 === 0) {
        result = console.log("Number " + number + " is even");
    } else {
        result = console.log("Number " + number + " is odd");
    }
    return result;
}
showContent(2, evenOrOdd);