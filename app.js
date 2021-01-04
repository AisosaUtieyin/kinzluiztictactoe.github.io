// grab the html classes using querySelectorAll/querySelector
const cells = document.querySelectorAll(".gameCell");
const reset = document.querySelector(".resetButton");
const playerXscore = document.querySelector(".xside");
const playerOscore = document.querySelector(".oside");

//variables to kkep track of the player turn and wheter the game is still going on
let nextPlayer = true;
var i = 1
var xscore =0
var oscore = 0

/*
 *checkGame, checks if there is a winning player.
 *addMove, prints x or o on the corresponding cell
 *playerTurn(), checks player turn and displays the player turn
 *resets the game
 */
function playerTurn(nextPlayer) {
  if (nextPlayer === true) {
    const Xturn = (document.querySelector(".gameStatus").innerHTML = "x turn");
  } else {
    const Oturn = (document.querySelector(".gameStatus").innerHTML = "o turn");
  }
}
function removeValues() {
  for (const i in cells) {
      if(i<=8){
        if (cells[i].classList[1] === "x") {
            cells[i].classList.remove("x");
          } else {
            cells[i].classList.remove("o");
          }
      }
    
  }
}
function addScoreX(i){
    
    xscore = xscore +i
    xscore.toString()
    playerXscore.innerHTML = xscore

}

function addScoreO(i){
    oscore = oscore + i
    oscore.toString()
    playerOscore.innerHTML = oscore
}


function checkGame() {
  const topLeft = cells[0].classList[1];
  const topMiddle = cells[1].classList[1];
  const topRight = cells[2].classList[1];
  const middleLeft = cells[3].classList[1];
  const middleMiddle = cells[4].classList[1];
  const middleRight = cells[5].classList[1];
  const bottomLeft = cells[6].classList[1];
  const bottomMiddle = cells[7].classList[1];
  const bottomRight = cells[8].classList[1];

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    if (topLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    if (middleLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    if (bottomLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    if (topLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    if (topMiddle === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topRight && topRight === middleRight && topRight === bottomRight) {
    if (topRight === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    if (topLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    if (topLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
    }
  }
  if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    if (topLeft === "x") {
      alert("Player " + "x" + " won");
      removeValues();
      addScoreX(i)
    } else {
      alert("Player " + "o" + " won");
      removeValues();
      addScoreO(i)
}
  }
  if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    alert("Tie");
    removeValues();
  }
}
function addMove(e) {
  const gameCellList = e.target.classList;

  if (gameCellList[1] === "x" || gameCellList[1] === "o") {
    return;
  }
  if (nextPlayer) {
    gameCellList.add("x");
    nextPlayer = !nextPlayer;
    playerTurn(nextPlayer);
  } else {
    gameCellList.add("o");
    nextPlayer = !nextPlayer;
    playerTurn(nextPlayer);
  }
  checkGame();
}
function resetGame() {
  window.location.href = "index.html";
}

//Even Listeners
for (const cell of cells) {
  cell.addEventListener("click", addMove);
}
reset.addEventListener("click", resetGame);
