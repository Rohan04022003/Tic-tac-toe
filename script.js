let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnO = true;

let move = 0;

let boxes = document.querySelectorAll(".box");
let gameBox = document.querySelector("#gameBox");

for (let box of boxes) {
  box.addEventListener("click", function () {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
      move++;
    } else {
      box.innerText = "X";
      turnO = true;
      box.disabled = true;
      move++;
    }
    if (move == 9) {
      result.innerHTML = `<p>Match Tied.</p>`;
      gameBox.style.display = "none";
      result.style.display = "flex";
    }
    winCheck();
  });
}

function winCheck() {
  for (let valCheck of winPattern) {
    let val1 = boxes[valCheck[0]].innerText;
    let val2 = boxes[valCheck[1]].innerText;
    let val3 = boxes[valCheck[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        flag = 1;
      }
    }
  }
}

function showWinner(winner) {
  let result = document.querySelector("#result");
  result.innerHTML = `<p>Congratulations, ${winner} is won the match</p>`;
  boxDisabled();
  gameBox.style.display = "none";
  result.style.display = "flex";
}

function boxDisabled() {
  for (let box of boxes) {
    box.disabled = true;
  }
}

let restartButton = document.querySelector("#restartBtn");
restartButton.addEventListener("click", function () {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  turnO = true;
  gameBox.style.display = "flex";
  result.style.display = "none";
  move = 0;
});
