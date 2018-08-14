//1) Can you restate the conditional more simply?
if ((isMichaelPhelps || isMerman && hasGills))
    isMichaelPhelps();

//2) Can you restate the conditional to use only one negation?
if (!(rich && happy))
    killSelf();
else
    liveOn();

//3) Can you restate the condition to use two negations and be more legible?
if ((!urgent && !important))
    usePostOfice();
else
    useFedex();

//4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5)
    doSomething();
// x cannot be greater 5 and less then or equal to -5, so it will never run

//4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5)
    doSomething();
//if x is greater then 5 OR is x is  less the or equal -5

//5) Can you restate the conditional to use no negations?
if ((x > 10 && y < 15))
    alert("You got it!");
else
    prompt("What you need?");

//6) Can you restate the conditional to use only one negation?
if (!(x < 10) || y <= 10 || z <= 25 || dead) {
    console.log("You know your DeMorgan's Laws");
}
//12345678910....252627282930

//7) Can you distribute the negation across the expression in parens?
if ((!alive || !distance > 1000 || !trapped || !enemies < 0)) {
    alert("game goes on");
}

//8) Can you distribute the negation across the expression in parens?
if (!dead || !level < 99 || !world == "Earth") {
    alert("Life goes on");
}
//9) Generate a random number between 0 and 1 in Javascript
Math.floor((Math.random() * 2) + 0);
//10) Generate a random number between 0 and 10 in Javascript
Math.floor((Math.random() * 11) + 0);
//11) Generate a random integer between 0 and 10 (inclusive)

Math.floor(Math.random() * (10 - 0 + 1)) + 0;

//12) Generate a random number between 5 and 10

Math.random() * (10 - 5) + 5;

//12b) Generate a random integer between 5 and 10
Math.floor(Math.random() * (10 - 5)) + 5;
// 13) Generate a random integer between -10 and 30
Math.floor(Math.random() * (30 - -10)) + -10;
//14) Write a coin flip function. It should return the string "heads" half the time and the string "butts" the other half
function coinFlip() {
    var random = Math.floor((Math.random() * 2) + 0);
    if (random === 0) return "Butts!"
    else if (random === 1) return "Heads!"
}

//15) Write a card picking function that outputs cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts', '10 of Diamonds', '8 of Spades'


//16) In programming, what is the opposite of black?
//!Black

//17) In programming, what is the opposite of x > y ?
!(x > y)
//18) Given an array of numbers, add up all the elements
var arr = [1,2,3,1];
function getSum(arr) {
    var total = 0;
    for (var i = 0; i = arr.length; i++) {
      return  total += i
    } 

}

getSum(arr)

