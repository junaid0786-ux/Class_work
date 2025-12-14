const img = document.getElementById("image");

if (img) {
  img.onload = () => {
    img.classList.remove("d-none");
  };
}

const uploadImage = document.getElementById("Upload");
if (uploadImage) {
  uploadImage.onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
      img.src = URL.createObjectURL(file);
      document.getElementById("Uploadlabel").style.display = "none";
    }
  };
}

let brightness = 100;
let contrast = 100;
let Saturation = 100;

function updateFilters() {
  img.style.filter = `
    brightness(${brightness}%)
    contrast(${contrast}%)
    saturate(${Saturation}%)
  `;
}

function changeBrightness(value) {
  brightness = value;
  updateFilters();
}

function changeContrast(value) {
  contrast = value;
  updateFilters();
}

function changeSaturation(value) {
  Saturation = value;
  updateFilters();
}

function reset() {
  let brightness = 100;
  let contrast = 100;
  let Saturation = 100;


}

function Download(){

}
