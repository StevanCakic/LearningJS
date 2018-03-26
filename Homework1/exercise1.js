/* 1.	John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five time his age wins: 
a.	Create a variables for the heights and ages of two frineds and assign them some values 
b.	Calculate their scores
c.	Decide who wins and print the winner to the console. Include the score in the string that you output to the console. 
Don’t forget that there can be a draw(both players with the same score)
d.	Add a third player and now decide who wins.
*/

var firstPlayer = "John";
var secondPlayer = "Iris";
var thirdplayer = "Stevan";
var heights_firstPlayer = 165;
var heights_secondPlayer = 160;
var heights_thirdplayer = 175;
var age_firsPalyer = 29;
var age_secondPlayer = 26;
var age_thirdPlayer = 24;

var scoreFisrtPlayer = heights_firstPlayer + 5 * age_firsPalyer;
var scoresecondPlayer = heights_secondPlayer + 5 * age_secondPlayer;
var scorethirdPlayer = heights_thirdplayer + 5 * age_thirdPlayer;
if (
  scoreFisrtPlayer > scoresecondPlayer &&
  scoreFisrtPlayer > scorethirdPlayer
) {
  console.log(
    "The winner is" + firstPlayer + "with" + scoreFisrtPlaye + "score"
  );
} else if (
  scoresecondPlayer > scoreFisrtPlayer &&
  scoresecondPlayer > scorethirdPlayer
) {
  console.log(
    "The winner is" + secondPlayer + "with" + scoresecondPlayer + "score "
  );
} else if (
  scorethirdPlayer > scoreFisrtPlayer &&
  scorethirdPlayer > scorethirdPlayer
) {
  console.log(
    "The winner is" + thirdplayer + "with" + scorethirdPlayer + "score "
  );
} else {
  console.log("Draw!All of payers have the same value");
}
