function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
  document.getElementById("bulb").style.boxShadow = "0px 0px 20px yellow";
}

function Off() {
  document.getElementById("bulb").style.backgroundColor = "transparent";
   document.getElementById("bulb").style.boxShadow = "none";

}

function Red() {
  document.getElementById("bulb").style.backgroundColor = "red";
  document.getElementById("bulb").style.boxShadow = "0px 0px 20px red";
}
function Blue() {
  document.getElementById("bulb").style.backgroundColor = "blue";
  document.getElementById("bulb").style.boxShadow = "0px 0px 20px blue";
}

const inputcolor = document.getElementById("inputcolor");
inputcolor.addEventListener("change", () => changecolor(inputcolor.value));

function changecolor(color) {
  document.getElementById("bulb").style.backgroundColor = color;
}

