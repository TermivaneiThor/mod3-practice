/* 
* EJERCICIO 6:
! ______________________________________________________
* Genera un array de 10 números aleatorios entre 0 y 100,
* calcula el menor y el mayor y muestra el resultado por 
* pantalla
*/

//* Generar un array de 10 números aleatorios entre 0 y 100
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 101);
  randomNumbers.push(randomNumber);
}

//* Calcular el valor mínimo y máximo
let minNumber = Math.min(...randomNumbers);
let maxNumber = Math.max(...randomNumbers);

//* Retornar los resultados con template string :

function result() {
  return `Números aleatorios: ${randomNumbers}\n Valor mínimo: ${minNumber}\n Valor máximo: ${maxNumber}`;
}

showContent(6, result());
