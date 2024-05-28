'use strict';
let boxes = document.querySelectorAll('.box');
let ResetBtn = document.querySelector('#Reset_btn');
let newGame = document.querySelector('#new_btn');
let msgContainer = document.querySelector('.msg_container');
let container = document.querySelector('.container');
let msg = document.querySelector('#msg');
let tour0 = true;
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
  let tour0 = true;
  enableBoxes();
  msgContainer.classList.add('hide');
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = '';
  }
};
boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (tour0) {
      box.innerText = 'X';
      tour0 = false;
    } else {
      box.innerText = 'O';
      tour0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const shoWinner = winner => {
  msg.innerText = `Congratulation Winner is ${winner}😎`;
  msgContainer.classList.remove('hide');
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != '' && pos2val != '' && pos3val != '') {
      if (pos1val === pos2val && pos2val === pos3val) {
        shoWinner(pos1val);
      }
    }
  }
};

newGame.addEventListener('click', resetGame);
ResetBtn.addEventListener('click', resetGame);

