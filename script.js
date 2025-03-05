//what do we need for a war card game

/**
 * deck
 * -52 cards(should each card be its own class? Should it be an object with 3 values?)
 *  -rank("name value")
 *  -suit(heart/spade/club/diamond)
 *  -values
 * -a way to shuggle the deck
 * -a way to pass the cards to the players (should this be in my deck or game logic?)
 * 
 * players (do I need a player class or can i just put this in game logic)
 * -name?
 * -score
 * -hand
 * 
 * logic to actually play the game...we can use a deck in any card game
 *  but we're playing a specific one.
 * -we need ways to compare the cards...number values on each card
 */

//Deck class

/** should have:
 * an array to store the cards
 * an array to store all the card's ranks
 * an array to store all the card's suits
 */

class Deck {
    constructor() {
        this.deck = [];
        this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];  
        this.suits = ["Hearts", "Diamonds", "Spades", "Clubs"];    
    }

    //Method to create a deck...iterate over our ranks/suits
    //Push a new card...(as an object) into our constructors this.deck

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let i = 0; i < this.ranks.length; i++) { 
              let card = {
                name: '${this.ranks[i]} of ${this.suits[i]}',
                value: i + 1   
              }
              this.deck.push(card)
            }
        }
    }

    shuffleDeck() {
       for (let i= this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
       }
    }

}

//class for a game (specifially our war game)
/**
 * -a deck...instantiate a new deck inside of our game class
 * 
 * -create the deck, shuffle the deck, and pass the deck...
 * 
 * -Logic to play the game
 *  -turn based, how many turns?
 *  -do our players have a hand yet?
 *  -control flow statement logic to decide to wins?
 * 
 * -2 Players
 *  -hand
 *  -score
 *  -name
 */

class Game {
    constructor() {
        this.player1 = {name: "Player 1", score: 0, hand: []};
        this.player2 = {name: "Player 2", score: 0, hand: []};
    }

    //Method to play the game
    /**
     * pass out cards to players
     * takes x amount of turns as long 
     * as players have cards (or the number of cards they have)
     * Award points based on card.value
     * log the winner
     */
    playGame() {
        //Instantiate a new deck, create a deck, then shuffle the deck
        const deck = new Deck();
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !== 0) {
            this.player1.hand.push(deck.deck.shift());
            this.player2.hand.push(deck.deck.shift());
        }

        //Actually playing the game...how many turns do I need?

        for (let i = 0; i < this.player1.hand.length; i++) {
            let p1Card = this.player1.hand[i];
            let p2Card = this.player2.hand[i];

            //Conditional logic to award points based on comparing card values
            if (p1Card.value > p2Card.value) {
                this.player1.score++;
                console.log(`P1 Card: ${p1Card.name}\nP2 Card: ${p2Card.name}\nPlayer 1 wins a point!\nCurrent Score: p1: ${this.player1.score}, p2: ${this.player2.score}\n`);
            } else if (p2Card.value > p1Card.value) {
                this.player2.score++;
                console.log(`P1 Card: ${p1Card.name}\nP2 Card: ${p2Card.name}\nPlayer 2 wins a point!\nCurrent Score: p1: ${this.player1.score}, p2: ${this.player2.score}\n`);
            } else {
                console.log(`P1 Card: ${p1Card.name}\nP2 Card: ${p2Card.name}\nTie: No points awarded\nCurrent Score: p1: ${this.player1.score}, p2: ${this.player2.score}\n`);
            }
        }

        if (this.player1.score > this.player2.score) {
            console.log(`Player 1 wins!\nFinal Score: p1: ${this.player1.score}, p2: ${this.player2.score}`);
        } else if (this.player2.score > this.player1.score) {
            console.log(`Player 2 wins!\nFinal Score: p1: ${this.player1.score}, p2: ${this.player2.score}`);
        } else {
            console.log("Tie");
        }
    }
}

const game = new Game
game.playGame()

