/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
function assert(hand, value) {
var output = handValue(hand);

function handValue () {
var K, Q, J = 10;
var hand = [];
var output = 0;
for (var i = 0; i < hand.length; i++) {
  var currentChar = hand.charAt(i);
  if (currentChar === '1') {
        currentChar++;
      } else if (currentChar === '2') {
        currentChar= 2;
      } else if (currentChar === '3') {
        currentChar= 3;
      } else if (currentChar === '4') {
        currentChar= 4;
      } else if (currentChar === '5') {
        currentChar= 5;
      } else if (currentChar === '6') {
        currentChar= 6;
      } else if (currentChar === '7') {
        currentChar= 7;
      } else if (currentChar === '8') {
        currentChar= 8;
      } else if (currentChar === '9') {
        currentChar= 9;
      } else if (currentChar === '10') {
        currentChar= 10;
      } else if (currentChar === 'K'|| currentChar === 'Q'|| currentChar === 'J') {
        currentChar= 10;
      } else if (currentChar === 'A'){
        if (value>11) {
          currentChar= 1;
        } else {
          currentChar= 11;
        }
      }
      currentChar=currentChar+Input.charAt(i);
    }
return output;
}
assert(["2", "2", "8"], 12);
assert(["2", "2", "K"], 14);
assert(["2", "Q"], 12);
assert(["7", "J"], 17);
assert(["7", "A"], 18);
assert(["8", "J", "A"], 19);
assert(["8", "A", "J"], 19);
assert(["8", "7", "A", "A"], 17);
}




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
