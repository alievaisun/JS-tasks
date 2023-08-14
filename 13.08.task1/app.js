const randomNumber = 49
let playerNumber = +prompt(' Write the number between 0 and 50')
let count = 1;

while (randomNumber !== playerNumber) {
    count++
    playerNumber = +prompt('Try again');
    
}

while (randomNumber !== playerNumber) {
    count++
    playerNumber = +prompt('Try again');
    
}
{
    console.log(`Good job! You found the number ${count} times`);
}