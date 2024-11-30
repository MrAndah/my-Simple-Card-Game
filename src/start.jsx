
import

function start() { 
    const initialComputersCards = shuffledCards.slice(0, 7);
    const initialPlayersCards = shuffledCards.slice(7, 14);
   
    setComputers_cards(initialComputersCards);
    setPlayers_cards(initialPlayersCards);

    const remainingCards = shuffledCards.slice(14);
    setShuffledCards(remainingCards);

    console.log("Player's Cards:", initialPlayersCards);
    console.log("Computer's Cards:", initialComputersCards);
    console.log("Remaining Cards:", remainingCards);
   
   // console.log(players_cards)
   // setShuffledCards(shuffledCards.filter(item => !players_cards.includes(item)));
   // setShuffledCards(shuffledCards.filter(item => !computers_cards.includes(item)));
   // console.log(shuffledCards);


   
   const startbtn = document.getElementById("start");
    startbtn.style.display="none";
 }


export default start

