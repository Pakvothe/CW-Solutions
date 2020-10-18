/* 
Given two integers a and b, which can be positive or negative, find the sum of all the numbers between 
including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum( a,b )
{
   if ( a === b){
     return a;
   }
    else{
      
      var max = Math.max(a, b); //agarro el maximo
      var min = Math.min(a,b); //agarro el minimo
      var result= 0;

      for (min; min <= max; min++){  //mientras minimo sea  menor o igual a max
        result += min; // sumo todos los valores delsde el minimo hasta llegar al maximo.
      }
      
      return result;

    }
  
}
console.log(getSum(540,-1)) // 146069

Examples

GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2