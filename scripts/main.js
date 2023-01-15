const btnEncriptar = document.querySelector("#encrypt-btn");
const btnDesencriptar = document.querySelector("#decrypt-btn");
const btnCopiar = document.querySelector("#copy-btn");
const copyParagraph = document.querySelector("#copy-paragraph");


const encrypt = () => {
    if(texto.value){
      if(copyParagraph.innerText === "Ingresa el texto que desees encriptar o desencriptar.")
        enableCopy();
      copyParagraph.innerText = encryptText(texto.value);
      texto.value = "";
      texto.focus();
      btnEncriptar.blur();
    }
};

const encryptText = text => {
  return text.replaceAll("e", "enter")
             .replaceAll("i", "imes")
             .replaceAll("a", "ai")
             .replaceAll("o", "ober")
             .replaceAll("u", "ufat");
}

const decrypt = () => {
    if(texto.value){
      copyParagraph.innerText = decryptText(texto.value);
      texto.value = "";
      texto.focus();
      btnDesencriptar.blur();
  }
};

const decryptText = text => {
  return text.replaceAll("ufat", "u")
             .replaceAll("ober", "o")
             .replaceAll("ai", "a")
             .replaceAll("imes", "i")
             .replaceAll("enter", "e");
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(copyParagraph.innerText);
    console.log('Se ha copiado el texto al portapapeles');
    /* Resuelto - se ha copiado texto exitosamente */
  } catch (err) {
    console.error('Hubo una error al copiar: ', err);
    /* Rechazado - no se ha copiado texto */
  }

  texto.focus();
  btnCopiar.blur();
}

btnEncriptar.onclick = encrypt;
btnDesencriptar.onclick = decrypt;
btnCopiar.onclick = copyContent;
