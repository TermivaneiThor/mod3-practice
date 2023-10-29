/* 
*EJERCICIO 9:
! _______________________________________________________
*Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
*el mayor y muestra el resultado por pantalla
*/


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numerosAleatorios = [];
  for (let i = 0; i < 10; i++) {
    numerosAleatorios.push(numeroAleatorio(0, 100));
  }
  
  let numeroMenor = Math.min(...numerosAleatorios);
  let numeroMayor = Math.max(...numerosAleatorios);
  
  function result() {
    return `Números aleatorios: ${numerosAleatorio}\n Valor mínimo: ${numeroMenor}\n Valor máximo: ${numeroMayor}`;
  }

  showContent(9, result());
  