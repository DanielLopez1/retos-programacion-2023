/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

function impresiónCien(){
    for(let i = 1; i <= 100; i++){
        let multiploDeTres = i%3 ;
        let multiploDeCinco = i%5;
        if(multiploDeTres === 0 && multiploDeCinco === 0){
            console.log('FizzBuzz');
        }else if(multiploDeTres === 0){
            console.log("Fizz");
        }else if(multiploDeCinco === 0) {
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

impresiónCien();