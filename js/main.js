/*----- constants -----*/

const winningCombos = [ [0, 1, 2], [3, 4, 5], [6, 7, 8],
[0, 3, 6], [1, 4, 7], [2, 5, 8],
[0, 4, 8], [2, 4, 6]
];

/*----- app's state (variables) -----*/

let turn, winner;

/*----- cached element references -----*/

let boxes = document.querySelector('div');

/*----- event listeners -----*/

document.querySelector('button').addEventListener('click', initialize);
// figure out how to hide while game is being played

let section = document.querySelector('section')
section.addEventListener('click', (evt) => {
    
    if(board[evt.target.id] !== null) {
        console.log("THIS BOX IS TAKEN")
        // locks box after click
    } 
    else {
        makeMove(evt);
    }
});

/*----- functions -----*/

initialize();

function initialize() {
    
    console.log('GAME STARTED')
    replay.innerText = "'X' GOES FIRST :^)";
    for(let i = 0; i < boxes.length; i++ ){
        boxes[i].innerText = '';
    }
    board = [null, null, null, 
        null, null, null, 
        null, null, null];
    turn = 1;
    winner = null;
}

function makeMove(evt) {
    
    let i = evt.target.id;
    console.log('player ' + turn + ' clicked box ' + i);
    if (turn === 1) {
        evt.target.innerText = 'X';
        replay.innerText = "O's TURN!";
    }
    else {
        evt.target.innerText = 'O';
        replay.innerText = "X's TURN!";
    }
    board[i] = turn;
    console.log(board);
    checkWinner();
    turn *= -1;
}

function checkWinner() {
    
    winningCombos.forEach(function(combo) {

        if (Math.abs(board[combo[0]]+board[combo[1]]+board[combo[2]]) === 3) {
            
            document.getElementById(combo[0]).style.color = 'red';
            document.getElementById(combo[1]).style.color = 'red';
            document.getElementById(combo[2]).style.color = 'red';

            section.style.pointerEvents = 'none';
            replay.innerText = "RESET GAME";
        }
    });

} 