const tituloCopiar = document.querySelector("#copy-title");
const imagenBuscar = document.images.namedItem("lookingFor");
const imagenLimpiar = document.images.namedItem("clear");
const btnCopy = document.querySelector("#copy-btn");
const copyRegion = document.querySelector("#copy-region");

const enableCopy = () => {
  btnCopy.classList.toggle("change");
  copyRegion.classList.toggle("change");
  tituloCopiar.classList.toggle("change");
  imagenBuscar.classList.toggle("change");
};

const clearContent = () => {
  if (texto.value) {
    texto.value = "";
    copyParagraph.innerText =
      "Ingresa el texto que desees encriptar o desencriptar.";
    btnCopy.classList.toggle("change");
    copyRegion.classList.toggle("change");
    tituloCopiar.classList.toggle("change");
    imagenBuscar.classList.toggle("change");
  }
};

imagenLimpiar.onclick = clearContent;
