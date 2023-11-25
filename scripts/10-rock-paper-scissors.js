let score = JSON.parse(localStorage.getItem('score'))
|| {
wins: 0,
Loses: 0,
Ties: 0,
};

document.querySelector('.js-score').innerHTML = `wins: ${score.wins} loses : ${score.Loses} Ties : ${score.Ties}`;

/*if (score === null){
score = {
    wins :0,
    Loses : 0,
    Ties : 0,
};
}*/



function playgame(playermove) {
const computermove = pickcomputermove();

let result = '';

if (playermove === 'scissors') {
    if (computermove === 'rock') {
        result = 'you Lose';
    }
    else if (computermove === 'paper') {
        result = 'You won';
    }
    else if (computermove === 'scissors') {
        result = 'tie';
    }

} else if (playermove === 'paper') {
    if (computermove === 'rock') {
        result = 'You won';
    }
    else if (computermove === 'paper') {
        result = 'tie';
    }
    else if (computermove === 'scissors') {
        result = 'you Lose';
    }

} else if (playermove === 'rock') {
    if (computermove === 'rock') {
        result = 'tie';
    }
    else if (computermove === 'paper') {
        result = 'you Lose';
    }
    else if (computermove === 'scissors') {
        result = 'You won';
    }
}

if (result === 'You won') {
    score.wins += 1;
} else if (result === 'you Lose') {
    score.Loses += 1;
}
else if (result === 'tie') {
    score.Ties += 1;
}
console.log(score);

localStorage.setItem('score', JSON.stringify(score));

updatescore()

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You
<img src="${playermove}-emoji.png" class="move-icon">
<img src="${computermove}-emoji.png" class="move-icon">
computer`;






/* alert(`You picked ${playermove} and Computer picked ${computermove}. ${result} 
 wins: ${score.wins} loses : ${score.Loses} Ties : ${score.Ties}`);*/
}


function pickcomputermove() {
const randNum = Math.random();
if (0 <= randNum && randNum < 1 / 3) {
    computermove = 'rock';
}
else if (1 / 3 <= randNum && randNum < 2 / 3) {
    computermove = 'paper';
}
else if (2 / 3 <= randNum && randNum < 1) {
    computermove = 'scissors';
}
return computermove;
}

function updatescore() {
document.querySelector('.js-score').innerHTML = `wins: ${score.wins} loses : ${score.Loses} Ties : ${score.Ties}`;

}