/* 
* EJERCICIO 20:
* Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
*Fib(n) = (n-2) + (n-1)

* Excepto para cuando n > 2:
* Fib(0) = 0
* Fib(1) = 1

* Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
* "El vigésimo número de la serie de Fibonacci es 6765"

* Nota: evita calcular números altos.
*/

function fibonacci(num) {
    if (num < 0) {
      return "Ingrese un número no negativo.";
    }
    
    if (num <= 1) {
      return num;
    }
  
    let fib = 0;
    let prev = 1;
    let current = 1;
  
    for (let i = 2; i < num; i++) {
      fib = prev + current;
      prev = current;
      current = fib;
  
      if (fib > 10000) {
        return "El número es demasiado grande. Por favor, ingrese un número más pequeño.";
      }
    }
  
    return fib;
  }
  
  //* Ejemplo de uso:
  const numero = 20;
  const resultado = fibonacci(numero);
  if (typeof resultado === "number") {
    return `El ${numero}-ésimo número de la serie de Fibonacci es ${resultado}`;
  } else {
    return resultado;
  }
  