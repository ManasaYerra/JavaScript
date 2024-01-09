// anonymous objects = objects without a name

// class Card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }
// let card1 = new Card("A","hearts");
// let card2 = new Card("A","diamonds");
// let card3 = new Card("A","spades");
// let card4 = new Card("A","clubs");
// let card5 = new Card("2","hearts");
// let card6 = new Card("2","diamonds");
// let card7 = new Card("2","spades");
// let card8 = new Card("2","clubs");

// let cards = [card1,card2,card3,card4,card5,card6,card7,card8];

// console.log(card1.value + card1.suit);
// console.log(cards[0].value + cards[0].suit);


// class Card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }
 
// let cards = [new Card("A","hearts"),
//              new Card("A","diamonds"),
//              new Card("A","spades"),
//              new Card("A","clubs"),
//              new Card("2","hearts"),
//              new Card("2","diamonds"),
//              new Card("2","spades"),
//              new Card("2","clubs")];

// console.log(cards[7].value + cards[7].suit);

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit;
    }
}
 
let cards = [new Card("A","hearts"),
             new Card("A","diamonds"),
             new Card("A","spades"),
             new Card("A","clubs"),
             new Card("2","hearts"),
             new Card("2","diamonds"),
             new Card("2","spades"),
             new Card("2","clubs")];

cards.forEach(card => console.log(`${card.value} ${card.suit}`));