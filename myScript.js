




//itterate best of 3 rounds
function game(){

    // initalize variables
    let round=0;
    let playerWin= 0;
    let compWin=0;

    do{
        //itterate round & update score
        round++;
        let score= [playerWin, compWin];
        alert(`Round ${round},  Score (${score})`)

        //get input
        let compChoice= getComputerChoice();
        let playerChoice=prompt("Rock, Paper, Scissors? (r,p,s  work)").toLowerCase();
    
        function playRound(playerSelection, computerSelection){
            playerSelection= playerChoice;
            computerSelection=compChoice;

            if(playerSelection==="scissors"||playerSelection==="s"){
                switch(computerSelection) {
                    case "scissors":
                    alert(`tie`)
                    break;
                    case "rock":
                    compWin++;
                    alert(`lose `)
                    break;
                    case "paper":
                    playerWin++;
                    alert(`win`)
                    break;
                }
            }
            else if(playerSelection==="rock"||playerSelection==="r"){
                switch(computerSelection) {
                    case "rock":
                    alert(`tie`)
                    break;
                    case "paper":
                    compWin++;    
                    alert(`lose`)
                    break;
                    case "scissors":
                    playerWin++;
                    alert(`win`)
                    break;
                }
            }
            else if(playerSelection==="paper"||playerSelection==="p"){
                switch(computerSelection) {
                    case "paper":
                    alert(`tie`)
                    break;
                    case "scissors":
                    compWin++;
                    alert(`lose`)
                    break;
                    case "rock":
                    playerWin++;
                    alert(`win`)
                    break;
                }
            }
            else if(playerSelection===null){
                return "nothing"
            }
            else{
                return "try again"
            }
        };
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
        //play a single game 
        playRound()

        //check for a winner
        if(playerWin===3){
            alert("You win")
            if(confirm("Play again?")){
                game();
            };
            break
        }
        if(compWin===3){
            alert("lose win")
            if(confirm("Play again?")){
                game();
            };
            break
        }
    }
    while(round<8); //in case of multiple draws
}
if(confirm('Play a game?')){
    game();
    if(confirm("play again?")){
        game();
    }
}