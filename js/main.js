/*----- constants -----*/

const lookup = {
    '1': 'X',
    '-1': 'O',
    'null': ' '
};

/*----- app's state (variables) -----*/

let boardArr, turn, winner;

/*----- cached element references -----*/

let boxes = document.querySelector('div');

/*----- event listeners -----*/

// addEventListener is a higher order function
// these are callback functions b/c they call functions within a function

document.querySelector('section').addEventListener('click', makeMove);
document.querySelector('button').addEventListener('click', initialize);

/*----- functions -----*/

initialize();

function initialize() {
    console.log('reset')
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1;
    winner = null;
    render();
}

function render() {
   
}

function makeMove(evt) {
    console.log(turn)
    let i = evt.target.id;
    console.log('clicked ' + i)
    board[i] = turn;
    turn *= -1; // switches turn
    winner = checkWinner();
    // render();
}

function checkWinner() {
    console.log(board)
    if (board[0]+board[1]+board[2] === 3 || board[0]+board[1]+board[2] === -3) {
        console.log('winner')
    }
    else if (board[3]+board[4]+board[5] === 3 || board[3]+board[4]+board[5] === -3) {
        console.log('winner')
    }
    else if (board[6]+board[7]+board[8] === 3 || board[6]+board[7]+board[8] === -3) {
        console.log('winner')
    }
    else if (board[0]+board[3]+board[6] === 3 || board[0]+board[3]+board[6] === -3) {
        console.log('winner')
    }
    else if (board[1]+board[4]+board[7] === 3 || board[1]+board[4]+board[7] === -3) {
        console.log('winner')
    }
    else if (board[2]+board[5]+board[8] === 3 || board[2]+board[5]+board[8] === -3) {
        console.log('winner')
    }
    else if (board[0]+board[4]+board[8] === 3 || board[0]+board[4]+board[8] === -3) {
        console.log('winner')
    }
    else if (board[2]+board[4]+board[6] === 3 || board[2]+board[4]+board[6] === -3) {
        console.log('winner')
    }
    else {
        console.log('no winner yet')
    } 
}