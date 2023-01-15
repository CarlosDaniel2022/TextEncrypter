const texto = document.querySelector("#encrypt");

const soloLetrasMinusculas = evento => {
  var ASCIICode = evento.which ? evento.which : evento.keyCode;
  if (ASCIICode < 33 || (ASCIICode >= 97 && ASCIICode <= 122)) return true;
  return false;
};

function controlarPegado(evento) {
  var datosPortapapeles, datosAPegar;

  // Obtener datos del portapeles
  datosPortapapeles = evento.clipboardData || window.clipboardData;
  datosAPegar = datosPortapapeles.getData("Text");

  let res = /^[a-z ]+$/.test(datosAPegar);

  if(!res){
    //Si contiene caracteres que no son letras minúsculas, no se permite pegar el contenido
    evento.stopPropagation();
    evento.preventDefault();
    alert("Solo se permite pegar texto que contenga letras minúsculas y sin acento");
  }
}

texto.addEventListener("paste", controlarPegado);

texto.onkeypress = soloLetrasMinusculas;
