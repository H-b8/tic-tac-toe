/*----- CONSTANTS -----*/

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
];

/*----- APP'S STATE VARIABLES -----*/

let turn, winner;

/*----- CACHED ELEMENT REFERENCES -----*/

let boxes = document.querySelectorAll('div');

/*----- EVENT LISTENERS -----*/

document.querySelector('button').addEventListener('click', initialize);

let section = document.querySelector('section');

section.addEventListener('click', (evt) => {
    if (board[evt.target.id] === null) {
        makeMove(evt);
    }
});

/*----- FUNCTIONS -----*/

initialize();

function initialize() {
    section.style.pointerEvents = 'auto';
    replay.style.pointerEvents = 'none';
    replay.innerText = "'X' GOES FIRST :^)";

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].style.color = 'black';
    }

    board = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    // X = 1, O = -1
    turn = 1;
}

function makeMove(evt) {
    let i = evt.target.id;

    if (turn === 1) {
        evt.target.innerText = 'X';
        replay.innerText = "O's TURN!";
    } else {
        evt.target.innerText = 'O';
        replay.innerText = "X's TURN!";
    }

    // PUT 1 OR -1 INTO TARGET SLOT
    board[i] = turn;
    
    checkWinner();
    
    // CHANGE TURN
    turn *= -1;
}

function checkWinner() {

    // FOR EVERY WINNING COMBO POSSIBILITY,
    // CHECK IF THE NUMBERS IN THOSE SLOTS ADDS UP TO 3 OR -3 + ANNOUNCE WINNER
    winningCombos.forEach(function (combo) {
        if (Math.abs(board[combo[0]] + board[combo[1]] + board[combo[2]]) === 3) {
            winner = true;

            document.getElementById(combo[0]).style.color = 'red';
            document.getElementById(combo[1]).style.color = 'red';
            document.getElementById(combo[2]).style.color = 'red';

            section.style.pointerEvents = 'none';
            replay.innerText = "CLICK TO RESET GAME";
            replay.style.pointerEvents = 'auto';
        } else {
            winner = null;
        }
    })

    // CHECK FOR CATS GAME
    // TURN THE BOARD PINK + SHOW RESET BUTTON
    if (!board.includes(null) && winner === null) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.color = '#FFC0C1';
        }

        section.style.pointerEvents = 'none';
        replay.innerText = "CLICK TO RESET GAME";
        replay.style.pointerEvents = 'auto';
    }
}