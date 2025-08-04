const prompt = require('prompt-sync')();

class Player{
    constructor(name){
        this.name = name;

    }
}
//All players


class HumanPlayer extends Player{
    constructor(name){
        super(name); //call on parent class constructor
    }

    humanMove(){
        const moves = ["rock", "paper", "scissors"];
        const userMove = prompt(`${this.name}, enter your move (rock/paper/scissors):`);
    
        return userMove.toLowerCase(); // simple validation step
    }
}
class ComputerPlayer extends Player{
    constructor(name){
        super(name);
    }

    makeMove() {
        const moves = ["rock", "paper", "scissors"];
        return moves[Math.floor(Math.random() * moves.length)];
    }
} //random index to pick a random move


//Game class to manage the game state
//It will keep track of the players, rounds played, and scores.
class Game {
    constructor(HumanPlayer, ComputerPlayer){
        this.human = HumanPlayer;
        this.computer = ComputerPlayer;
        this.roundsPlayed = 0;
        this.P1wins = 0;
        this.P2wins = 0;
        this.ties = 0;
        }
            startRound(){
            this.roundsPlayed++;
            const humanMove = this.human.humanMove();
            const computerMove = this.computer.makeMove();
            const result = this.determineWinner(humanMove, computerMove);

            if(result === "human") {
                this.P1wins++;
                console.log(`${this.human.name} wins this round!`);
            } else if(result === "computer") {
                this.P2wins++;
                console.log(`${this.computer.name} wins this round!`);
            } else {
                this.ties++;
                console.log("It's a tie!");
            }
        }
// who wins 
            determineWinner(humanMove, computerMove) {
                if(humanMove === computerMove) {
                    return "tie";
                } else if(humanMove === "rock" && computerMove === "scissors" ||
                          humanMove === "paper" && computerMove === "rock" ||
                          humanMove === "scissors" && computerMove === "paper") {
                    return "human";
                } else {
                    return "computer";
                }
            }
    

//total Rounds in 1 game and when to start display reuslts when finish the game
            totalRounds(rounds = 3){
                for(let i = 0; i < rounds; i++){
                    this.startRound();
                }
                this.displayResults();
            }

// display results after all rounds are played
            displayResults() {
                console.log(`Total Rounds Played: ${this.roundsPlayed}`);
                console.log(`${this.human.name} Wins: ${this.P1wins}`);
                console.log(`${this.computer.name} Wins: ${this.P2wins}`);
                console.log(`Ties: ${this.ties}`);
            }
    }



const P1 = new HumanPlayer("Player 1");
const P2 = new ComputerPlayer("Player 1");
const game = new Game(P1, P2);
game.startRound();
game.totalRounds(3); //play 3 rounds
game.displayResults(); //display results after all rounds are played


