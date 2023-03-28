'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('currrent--0');
const current1El = document.getElementById('currrent--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')

let score,currentScore,activePlayer,playing

const newGame = function(){
  score = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore.textContent = 0;
  player0El.classList.add('player--winner');
  player1El.classList.add('player--winner');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--active');
  document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,.5)';
}

const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
  if(playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `/images/dice-${dice}.png`;
    if(dice != 1){
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent
      = currentScore;
  
    }
    else{
      switchPlayer();
      document.getElementById(`current--${activePlayer}`).textContent = 0
    }
  }
});

btnHold.addEventListener('click', function(){
  if(playing){

    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = 
    score[activePlayer];
  
    if(score[activePlayer >= 100]){
      playing = false;
      win();
      document.querySelector(`.player--${activePlayer}`).classList.add
      ('player--active');
      document.querySelector(`.player--${activePlayer}`).classList.remove
      ('player--active');
      document.querySelector('body').style.backgroundColor = 'rgba(0,0,0,.5)' 
  
    }else{
      switchPlayer()
    }
  }
});

function win(){
  const newH1 = document.createElement("h1");

  const h1Content = document.createTextNode(`${activePlayer} win the game`);

  newH1.appendChild(h1Content);

  const currentH1 = document.getElementById("win");

  document.body.insertBefore(newH1, currentH1);

}
btnNew.addEventListener('click', newGame);

