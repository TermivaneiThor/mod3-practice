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
  const randomNumber = Math.floor(Math.random() * 101);
  randomNumbers.push(randomNumber);
}

//* Calcular el valor mínimo y máximo
const minNumber = Math.min(...randomNumbers);
const maxNumber = Math.max(...randomNumbers);

//* Mostrar los resultados por pantalla
console.log("Números aleatorios:", randomNumbers);
console.log("Valor mínimo:", minNumber);
console.log("Valor máximo:", maxNumber);
