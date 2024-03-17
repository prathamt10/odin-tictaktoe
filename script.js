const cells = document.querySelectorAll('[cell]');
let turn;
const winning_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

startGame();

function startGame() {
    turn = 1;
    cells.forEach((cell) => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}

function handleClick(e) {
    if (turn % 2 != 0) {
        e.target.classList.add('x');
    } else {
        e.target.classList.add('o');
    }
    if (checkWin()) {
        alert(`${turn % 2 != 0 ? 'X' : 'O'} won!`);
        startGame();
    }
    turn++;
    if (turn > 9) {
        alert('A Draw!');
        startGame();
    }
}

function checkWin() {
    return winning_combos.some((combo) => {
        return combo.every((index) => {
            return cells[index].classList.contains(turn % 2 != 0 ? 'x' : 'o');
        });
    });
}