'use strict';

let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#Reset_btn');
let newGame = document.querySelector('#new_btn');
let msgContainer = document.querySelector('.msg_container');
let container = document.querySelector('.container');
let msg = document.querySelector('#msg');
let hide = document.querySelector('.hide1');

let isXTurn = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  isXTurn = true;
  enableBoxes();
  msgContainer.classList.add('hide');
};

const disableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach(box => {
    box.disabled = false;
    box.innerText = '';
  });
};

const showWinner = winner => {
  msg.innerText = `Congratulations! Winner is
  ${winner}🏆`;
  msgContainer.classList.remove('hide');
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    const pos1val = boxes[a].innerText;
    const pos2val = boxes[b].innerText;
    const pos3val = boxes[c].innerText;

    if (pos1val && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
      return;
    }
  }
  if ([...boxes].every(box => box.innerText !== '')) {
    msg.innerText = 'The Game is Tie! 🤝';
    msgContainer.classList.remove('hide');
    return;
  }
};
// demo comment 
boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (isXTurn) {
      box.innerText = 'X';
      box.style.color = '#ff4757';
      isXTurn = false;
    } else {
      box.innerText = 'O';
      box.style.color = '#2ed573';
      isXTurn = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newGame.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

resetGame();







