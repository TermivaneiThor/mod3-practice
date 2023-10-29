/* 
* EJERCICIO 18:
! ___________________________________________________________
* Dada una cadena de texto, crea una función que la recibe como    argumento y 
* devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
* por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
* Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/

function cadenaAHashtag(cadena) {
    //* Divide la cadena en palabras
    const palabras = cadena.split(" ");
    
    //* Transforma cada palabra en minúsculas y capitaliza la primera letra
    const palabrasCapitalizadas = palabras.map((palabra) => {
      palabra = palabra.toLowerCase();
      return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
  
    //* Une las palabras en una sola cadena sin espacios
    const hashtag = "#" + palabrasCapitalizadas.join("");
  
    return hashtag;
  }
  
  //* Ejemplo de uso:
function resultado() {
    const texto = "Programando en Javascript";
    const hashtag = cadenaAHashtag(texto);
    return hashtag;
  }

  showContent(18, resultado());

  