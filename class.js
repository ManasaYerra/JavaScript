// class = blueprint for creating objects

class player{
    score = 0;
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}
const player1 = new player();
const player2 = new player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause()
player1.exit()
