let firstCard = 2;
let secondCard = 5;
let cards = [firstCard,secondCard]; //ordered list of items 
let sum = firstCard + secondCard;
let wonBJ = false;
let isAlive = true;
let message = ""; 
let messageEl = document.getElementById("message-el")
let sumElement = document.querySelector("#sumElement")
let cardsEl = document.querySelector("#cards-el")

function startGame(){
    renderGame();
}


function renderGame(){
    //  render out firstCard and secondCard
    cardsEl.textContent = "Cards: "
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }


    // render out ALL the cards we have 
    sumElement.textContent = "Sum: " + sum
    if (sum <= 20){
        message ="Wanna draw another? lol"
    } else if (sum === 21){
        message ="Congrats, you got blackjack!"
        wonBj = true; 
    } else {
        message ="LMAO you lost get guud"
        isAlive = false; 
    }
    messageEl.textContent = message   
}

function newCard(){
    console.log("Getting a new card from the deck")

    let nextCard = 6;
    sum += nextCard;
    cards.push(nextCard);
    renderGame();
}