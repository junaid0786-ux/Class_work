const bg = document.getElementById("background");
background.addEventListener("change", () => changecolorbg(background.value));

function changecolorbg(color) {
  document.getElementById("info").style.backgroundColor = color;
}

const heading = document.getElementById("heading");
heading.addEventListener("change", () => changecolor(heading.value));

function changecolor(color) {
  document.getElementById("Heading").style.color = color;
}

const pr = document.getElementById("para");
para.addEventListener("change", () => changepara(para.value));

function changepara(color) {
  document.getElementById("Paragraph").style.color = color;
}
