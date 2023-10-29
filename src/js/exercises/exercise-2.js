/* 
* EJERCICIO 2:
! ______________________________________________
* Muestra el siguiente mensaje dependiendo de si 
* un número es par o impar:
* “Number 34 is even” ó “Number 13 is odd”
*/

//* Comprobamos mediante una expresión ternaria si es
//* par o impar:
function evenOrOdd(number) { 
    return number % 2 === 0 ? `Number ${number} is even` : `Number ${number} is odd`;
}

showContent(2, evenOrOdd(34));