/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and 
returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
    return  a.diff(b); //llamo al prototipo y comparo el array a y el b y retorno las no cohicidencias
  }
  

  //creo un prototipo que me compara 2 array y me devuelve las cosas  que no coinciden
  Array.prototype.diff = function(a) { 
      return this.filter(function(i) {return a.indexOf(i) < 0;});
  };