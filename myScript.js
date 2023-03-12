let playerWin= 0;
let compWin=0;

let playerChoice='';

const buttons= document.querySelectorAll('button')


// click to choose & begin a game

buttons.forEach(button => {
    button.addEventListener("click", function(e){
        switch (e.target.classList.value){  
            case "Rock": 
            playerChoice= 'Rock'
            playRound()
            break;
            case "Paper": 
            playerChoice= 'Paper'
            playRound()
            break;
            case "Scissors": 
            playerChoice= 'Scissors'
            playRound()
            break;

        }
    })
});
    

function playRound(playerSelection, computerSelection){
    function getComputerChoice(){
        let min=1;
        let max=4;
        let winner= Math.floor(Math.random() * (max-min)+min);
        if(winner===1){
            return "rock"
        }
        if(winner===2){
            return "paper"
        }
        if(winner===3){
            return "scissors"
        }
        };

    playerSelection = playerChoice;
    computerSelection = getComputerChoice();
    const displayBox= document.querySelector('.display-results')

    if(playerSelection==="Scissors"){
        switch(computerSelection) {
            case "scissors":
            //alert(`tie`)
            break;
            case "rock":
            compWin++;
            //alert(`lose `)
            break;
            case "paper":
            playerWin++;
            //alert(`win`)
            break;
        }
    }
    else if(playerSelection==="Rock"){
        switch(computerSelection) {
            case "rock":
            //alert(`tie`)
            break;
            case "paper":
            compWin++;  
            //alert(`lose`)
            break;
            case "scissors":
            playerWin++;
            //alert(`win`)
            break;
        }
    }
    else if(playerSelection==="Paper"){
        switch(computerSelection) {
            case "paper":
            //alert(`tie`)
            break;
            case "scissors":
            compWin++;
            //alert(`lose`)
            break;
            case "rock":
            playerWin++;
            //alert(`win`)
            break;
        }
    }
// it isnt until here that the score will be displayed
    displayBox.textContent= `Score (${playerWin} - ${compWin})`;

// test for a winner, announce winner, reset score
    if(playerWin===5){
        displayBox.textContent= `Score (${playerWin} - ${compWin})`;
        alert("You win")
        playerWin=0;
        compWin=0;
    }
    if(compWin===5){
        displayBox.textContent= `Score (${playerWin} - ${compWin})`;
        alert("lose win");
        playerWin=0;
        compWin=0;
    }
}
