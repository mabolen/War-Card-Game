//classes for card and player
class Card {
    //each card has a number value 2-14, 11=jack 12=queen, 13=king, 14=ace
    //suit can be hearts, diamonds, clubs, spades
    //face is the string value of the card
    constructor(num, suit, face) {
        this.num = num;
        this.suit = suit;
        this.face = face;
    }
}

class Player {
    constructor() {
        this.hand = [];
        this.score = 0;
    }
}
//create 2 players
const player1 = new Player();
const player2 = new Player();

//arrays for creating the deck
let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let faces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
let suits = ["hearts", "diamonds", "spades", "clubs"];
let deck = [];

//create cards and add to deck
//outer loop iterates through the 4 suits
//inner loop iterates through nums and faces and pushes a new Card object to the deck array
for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < 13; j++) {
        deck.push(new Card(nums[j], suits[i], faces[j]));
    }
}
//deal randomly to each player hand
for (let i = 0; i < deck.length; i++) {
    let random = Math.floor(Math.random() * 10);
    if (random < 5) {
        player1.hand.length < 26 ?
            player1.hand.push(deck[i]) :
            player2.hand.push(deck[i]);
    } else {
        player2.hand.length < 26 ?
            player2.hand.push(deck[i]) :
            player1.hand.push(deck[i]);
    }
}

//function to run the game 
const game = () => {
    //loop once for each card in player hand
    for (let i = 0; i < 26; i++) {
        console.log(
            `Player1 plays: ${player1.hand[i]["face"]} of ${player1.hand[i]["suit"]}`
        );
        console.log(
            `Player2 plays: ${player2.hand[i]["face"]} of ${player2.hand[i]["suit"]}`
        );
        //calculate score each loop
        if (player1.hand[i]["num"] > player2.hand[i]["num"]) {
            console.log("Player1 Wins!");
            player1.score++;
        } else if (player1.hand[i]["num"] < player2.hand[i]["num"]) {
            console.log("Player2 Wins!");
            player2.score++;
        } else {
            console.log("Draw!");
        }
    }
    //show final score and log the winning player
    console.log(`Final Score: Player1: ${player1.score}  Player2: ${player2.score}`);
    return player1.score > player2.score ?
        console.log("Player1 wins the game!") :
        console.log("Player2 wins the game!");
};
//function call to run the game
game()