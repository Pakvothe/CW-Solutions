/* Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an intege
*/

function squareDigits(num){

    let str = num.toString(); //numero ingresado a string  
  
    let arr = str.split(''); // separo todos los numeros del string
  
    const square = arr.map((n) => Math.pow(n,2)); // hago la potencia de cada numero
    
    const int = square.join(''); // uno todos los numeros en un solo string
      
    return parseInt(int); // transformo el string en numero y devuelvo el resultado
    
  }