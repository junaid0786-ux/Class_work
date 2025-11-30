function start() {
  console.log("Game Started");

  document.getElementById("player1").disabled = false;
  document.getElementById("Restart").disabled = false;
  document.getElementById("start").disabled = true;
}

function restart() {
  window.location.reload();
}

function P1play() {
  console.log("Player1 playing..");
  let Score = Number(document.getElementById("p1Score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

//   switch (DF) {
//     case 1: {
//       DocumentFragment.getElementById("p1dice");
//     }
//     case 2: {
//       DocumentFragment.getElementById("p1dice");
//     }
//     case 3: {
//       DocumentFragment.getElementById("p1dice");
//     }
//     case 4: {
//       DocumentFragment.getElementById("p1dice");
//     }
//     case 5: {
//       DocumentFragment.getElementById("p1dice");
//     }
//     case 6: {
//       DocumentFragment.getElementById("p1dice");
//     }
//   }

  if (DF === 6) {
    document.getElementById("player1").disabled = true;
    document.getElementById("player2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1Score").innerText = Score;
  }
}

function P2play() {
  console.log("Player2 playing..");

  let Score = Number(document.getElementById("p2Score").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

//   DocumentFragment.getElementById("p1dice").src = ``;

  if (DF === 6) {
    document.getElementById("player1").disabled = false;
    document.getElementById("player2").disabled = true;
  } else {
    Score = Score + DF;
    document.getElementById("p2Score").innerText = Score;
  }
}
