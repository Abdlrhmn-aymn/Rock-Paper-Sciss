let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
   };

function playGame (userMove) {
    

    let randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'
    }


    let result = '';

    if (computerMove === userMove) {
        result = 'Tie' ;
     } else if (
         (computerMove === 'rock' && userMove === 'scissors') ||
         (computerMove === 'paper' && userMove === 'rock') ||
         (computerMove === 'scissors' && userMove === 'paper')
     ) {
         result = 'You lose';
     } else {
         result = 'You win' ;
     }    

     document.querySelector('.result').innerHTML = result
     document.querySelector('.play').innerHTML = ` You <img src="${userMove}.png" class="icon"><img src="${computerMove}.png" class="icon" alt="">Computer`
     
    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    };

    localStorage.setItem('score', JSON.stringify(score));

    console.log(`You picked ${userMove}, Computer picked ${computerMove}, ${result}`);
    function updateScore() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}  Losses: ${score.losses}  Ties: ${score.ties}`;
    }
    updateScore();
}
