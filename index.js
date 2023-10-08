var randomNumber1 = createRandomNumber(6);
var randomNumber2 = createRandomNumber(6);

function createRandomNumber(number) {
    var random = Math.random();
    return Math.floor(random * number) + 1;//Whole number 1 to 6
}
// console.log(randomNumber1);
// console.log(randomNumber2);
document.querySelector(".img1").setAttribute("src","./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNumber2 + ".png");

if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "🤔Draw!!";
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🏆Player 1 is Won!";
} else {
    document.querySelector("h1").textContent = "Player 2 is Won!🏆";
}