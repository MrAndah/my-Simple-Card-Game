

import { useState , useEffect } from "react"

function Uno (){

    const [selectedItem, setSelectedItem] = useState(null);

    

    const[ cards , setCards]=useState( [
        // Red cards
        { number: 0, type: "normal", color: "red" },
        { number: 1, type: "normal2", color: "red" },
        { number: 1, type: "normal", color: "red" },
        { number: 2, type: "normal2", color: "red" },
        { number: 2, type: "normal", color: "red" },
        { number: 3, type: "normal2", color: "red" },
        { number: 3, type: "normal", color: "red" },
        { number: 4, type: "normal2", color: "red" },
        { number: 4, type: "normal", color: "red" },
        { number: 5, type: "normal2", color: "red" },
        { number: 5, type: "normal", color: "red" },
        { number: 6, type: "normal2", color: "red" },
        { number: 6, type: "normal", color: "red" },
        { number: 7, type: "normal2", color: "red" },
        { number: 7, type: "normal", color: "red" },
        { number: 8, type: "normal2", color: "red" },
        { number: 8, type: "normal", color: "red" },
        { number: 9, type: "normal2", color: "red" },
        { number: 9, type: "normal", color: "red" },
      
        // Yellow cards
        { number: 0, type: "normal", color: "yellow" },
        { number: 1, type: "normal2", color: "yellow" },
        { number: 1, type: "normal", color: "yellow" },
        { number: 2, type: "normal2", color: "yellow" },
        { number: 2, type: "normal", color: "yellow" },
        { number: 3, type: "normal2", color: "yellow" },
        { number: 3, type: "normal", color: "yellow" },
        { number: 4, type: "normal2", color: "yellow" },
        { number: 4, type: "normal", color: "yellow" },
        { number: 5, type: "normal2", color: "yellow" },
        { number: 5, type: "normal", color: "yellow" },
        { number: 6, type: "normal2", color: "yellow" },
        { number: 6, type: "normal", color: "yellow" },
        { number: 7, type: "normal2", color: "yellow" },
        { number: 7, type: "normal", color: "yellow" },
        { number: 8, type: "normal2", color: "yellow" },
        { number: 8, type: "normal", color: "yellow" },
        { number: 9, type: "normal2", color: "yellow" },
        { number: 9, type: "normal", color: "yellow" },
      
        // Green cards
        { number: 0, type: "normal", color: "green" },
        { number: 1, type: "normal2", color: "green" },
        { number: 1, type: "normal", color: "green" },
        { number: 2, type: "normal2", color: "green" },
        { number: 2, type: "normal", color: "green" },
        { number: 3, type: "normal2", color: "green" },
        { number: 3, type: "normal", color: "green" },
        { number: 4, type: "normal2", color: "green" },
        { number: 4, type: "normal", color: "green" },
        { number: 5, type: "normal2", color: "green" },
        { number: 5, type: "normal", color: "green" },
        { number: 6, type: "normal2", color: "green" },
        { number: 6, type: "normal", color: "green" },
        { number: 7, type: "normal2", color: "green" },
        { number: 7, type: "normal", color: "green" },
        { number: 8, type: "normal2", color: "green" },
        { number: 8, type: "normal", color: "green" },
        { number: 9, type: "normal2", color: "green" },
        { number: 9, type: "normal", color: "green" },
      
        // Blue cards
        { number: 0, type: "normal", color: "blue" },
        { number: 1, type: "normal", color: "blue" },
        { number: 1, type: "normal2", color: "blue" },
        { number: 2, type: "normal", color: "blue" },
        { number: 2, type: "normal2", color: "blue" },
        { number: 3, type: "normal", color: "blue" },
        { number: 3, type: "normal2", color: "blue" },
        { number: 4, type: "normal", color: "blue" },
        { number: 4, type: "normal2", color: "blue" },
        { number: 5, type: "normal", color: "blue" },
        { number: 5, type: "normal2", color: "blue" },
        { number: 6, type: "normal", color: "blue" },
        { number: 6, type: "normal2", color: "blue" },
        { number: 7, type: "normal", color: "blue" },
        { number: 7, type: "normal2", color: "blue" },
        { number: 8, type: "normal", color: "blue" },
        { number: 8, type: "normal2", color: "blue" },
        { number: 9, type: "normal", color: "blue" },
        { number: 9, type: "normal2", color: "blue" }
      ] 
    );


    // These are variable I'll use
  const [pcards , setPcards] = useState([]); // This is the list of player's cards
  const [ccards , setCcards] = useState([]); // This is the list of computer's cards
  const [current , setCurrent] = useState([]);  // This is for the last card
  const [choice , setChoice] = useState([]);   // For the cards the players select 
  const [compchoice , setCompchoice] = useState([]); // For computers choice
  
  
  

  function start() {
    const shuffled = [...cards]; // Copy the cards array for shuffling
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Shuffle
    }

    // Set up hands and current card
    const playerCards = shuffled.slice(0, 7);
    const computerCards = shuffled.slice(7, 14);
    const curr = shuffled.slice(14, 15);

    setCards(shuffled.slice(15)); // Remaining cards after dealing
    setPcards(playerCards);
    setCcards(computerCards);
    setCurrent(curr);

    // Hide the start button
    document.getElementById("start").style.display = "none";
  }

  // Dependency array to log after state changes

  // Selecting a card
  
  // This is the select Function
  
  function select (x , index , e){ // please dont question why i used x as a variable
    if(choice.some(
      (chosenCard) => // this is to check if the selected card is part of the players choice
        chosenCard.number === x.number && 
        chosenCard.color === x.color && 
        chosenCard.type === x.type 
        ))
     {
         console.log("it is part");
         console.log(current);
          // This is to remove the selected card in case it was part
         const updatedChoice = choice.filter(
            (choiceCard) =>
              !(
                choiceCard.number === x.number &&
                choiceCard.color === x.color &&
                choiceCard.type === x.type
              )
          );
        
        setChoice(updatedChoice);

      //   setSelectedItems((prev) =>
      //     prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      // );

         e.target.style.color="black";
         e.target.style.paddingInline="23.74px";
    }
    else{
      console.log("its not part");
      setChoice([...choice,x]);

        e.target.style.color="black";
        e.target.style.paddingInline="23.74px";

    }
  }

// This is the Submit Function

function submit() {
  for (let i = 0; i < choice.length; i++) {
    if (choice[i].number === current[0].number || choice[i].color === current[0].color) {
      let newchoice = choice[i];

      // Add the selected card back to the deck
      setCards((prevCards) => [...prevCards, newchoice]);

      // Remove the selected card from player's hand
      setPcards((prevPcards) =>
        prevPcards.filter(
          (card) => !(card.number === newchoice.number 
                      && card.color === newchoice.color  
                      && card.type === newchoice.type )
        )
      );

      // Update the current card
      setCurrent([newchoice]);
    } else {
      uno_charge();
    }

    

    // Add a delay before the computer's turn
    setTimeout(() => {
      comp_turn();
    }, 1000);
  }
  setCards([...cards , choice])
  setChoice([]);

  console.log(cards)
}

  // This is the Uno Chagre Function 

  function uno_charge(){
    window.alert("Uno Charge");
    
    const playerCards = cards[0];

    setPcards((prevCards) => [...prevCards, playerCards]);

    console.log(choice)
    console.log(current.number)
    console.log(current.color)
 

    const updatedCards = cards.filter(
      (card) =>
        !ccards.some((c) => c.number === card.number && c.color === card.color && c.type === card.type) &&
        !pcards.some((p) => p.number === card.number && p.color === card.color && p.type === card.type)
    );

    setCards(updatedCards);
    
    
  }

  // This is the draw card function

  function draw_card(){
    const playerCards = cards[0];

    setPcards((prevCards) => [...prevCards, playerCards]);
    

    console.log(choice)
    console.log(playerCards)
    console.log(current.color)
 



    setCards(prevCards => prevCards.slice(1));


    if (playerCards.color === current[0].color || playerCards.number === current[0].number) {
      // Player can choose to play this card
      window.alert(`You drew a playable card: ${playerCards.color} ${playerCards.number}`);
    } else {
      // If not playable, computer's turn
      setTimeout(() => {
        window.alert("No cards left to play - it's the computer's turn");
        comp_turn();
      }, 1000);
    }

    console.log(cards)
  }



  //This is Computers Turn Function

  function comp_turn() {
    let foundCard = false;
    let chosenCard = null;
  
    // Find a matching card in the computer's hand
    for (let i = 0; i < ccards.length; i++) {
      if (ccards[i].number === current[0].number || ccards[i].color === current[0].color) {
        chosenCard = ccards[i];
        foundCard = true;
        break;
      }
    }
  
    if (foundCard) {
      setCompchoice([chosenCard]);
      setCurrent([chosenCard]);
  
      // Remove the chosen card from computer's hand
      let compCards = ccards.filter(
        (card) => !(card.number === chosenCard.number &&
                     card.color === chosenCard.color &&
                     card.type === chosenCard.type)
      );
      setCcards([...compCards, current]);
    } else {
      // If no card is playable, draw a card
      window.alert("Computer has picked a card");
      () => {
       const selcard = cards[0];

       if(selcard.number === current.number || selcard.color === current.color){
        setCurrent(selcard);

        setCards((prevcards) =>
          prevcards.filter(
            (card) => !(card.number === selcard.number 
                        && card.color === selcard.color  
                        && card.type === selcard.type )
          )
        );
        setCards([...cards, selcard]);         
       }
       else{
        setCcards((prevccards) => [...prevccards, selcard]);
       }
      }
    }
  
    // Reset compchoice after turn
    setCompchoice([]);
  }
  
  
  return(
    <div id="container"> 
      <h1> My Uno Game</h1>
      <div id="top_part">
        <button onClick={start} id="start"> start</button>
        <button onClick={submit}> Submit</button>
        {current.map((current , index) => 
        <span key={index} id="cardz" style={{backgroundColor:current.color}}> {current.number} </span>
        )}
        <span id="cards" color="black" onClick={draw_card}> Draw Card</span>
      </div>
      <div id="players_cards">
        {pcards.map(( Cards , index) =>
          <span id='card'
                key={index}
                className={'item'}
                style={{backgroundColor:Cards.color}}
                onClick={() => select(Cards , index, )}>
          {Cards.number} 
          </span>
        )}

      </div>
    </div>
    )


}   


export default Uno