/*
In this little assignment you are given a string of space separated numbers, and have to return the 
highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){

    let split = numbers.split(' '); //divide el string en un array
    
    var arr = []; //declaro array vacio
    
    for(var i = 0; i < split.length; i++){  //bucle para transformar los string del array en numeros
      
      let conv = parseInt(split[i],10) //convierto los string dentro del array split en numeros
    
      arr.push(conv) //pusheo los  numeros al array vacio
    
    }
    
    var max = Math.max(...arr) //consigo el numero maximo del array
    
    var min = Math.min(...arr) // consigo el numero minimo del array

    var maxF = max.toString(10); // convierto el numero maximo a array
   
    var minF = min.toString(10); // convierto el numero minimo a array

    
    return (maxF + ' ' +minF) // retorno el array del numero maximo concatenado al array del numero
                             //minimo
}
    
    
    console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

    /*
 
    function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

*/