/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing
 in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets 
strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that
ment. Otherwise return NO.
Examples:

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change
 (you can't make two bills of 25 from one of 50

*/

function tickets(peopleInLine) {
    var deposit = [0, 0, 0];

    function updateDeposit(paid) {
        for (var i = 0; i < deposit.length; i++) {
            deposit[i] = deposit[i] + paid[i];
        }
    }

    for (var index in peopleInLine) {

        if (peopleInLine[index] === 25) {
            updateDeposit([1, 0, 0])
        } else if (peopleInLine[index] === 50) {
            updateDeposit([-1, 1, 0])
        } else { // pay 100
            if (deposit[0] >= 1 && deposit[1] >= 1) {
                updateDeposit([-1, -1, 1]);
            } else if (deposit[0] >= 3 && deposit[1] == 0) {
                updateDeposit([-3, 0, 1]);
            } else {
                updateDeposit([-3, 0, 1]);
            }
        }

        if (deposit[0] < 0 || deposit[1] < 0 || deposit[2] < 0) {
            return 'NO';
        }
    }
    return 'YES';
}


/*

function tickets(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break
        
      case 50:
        bills[0]--
        bills[1]++
        break
        
      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }
    
    if (bills[0] < 0) {
      return 'NO'
    }
  }
  
  return 'YES'
}
*/