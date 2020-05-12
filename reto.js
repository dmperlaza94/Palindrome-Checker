let enviar = document.getElementById("enviar");
enviar.addEventListener("click", () => {
  let input = document.getElementById("input");
  let resultado = palindrome(input.value);
  if (resultado === true) {
    alert("si es palindrome");
  } else {
    alert("no es palindrome vuelva a intentarlo");
  }
});

function palindrome(textomin) {
  let texto = textomin
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-zA-Z0-9+]/g, "");
  let textoTamano = texto.length;
  let alreves = new Array();
  console.log(textoTamano);

  console.log(texto[0]);

  for (let i = textoTamano; i >= 0; i--) {
    alreves[i] = texto[textoTamano - i];
    //  console.log(texto [textoTamano-i]);
  }

  console.log(texto);
  console.log(alreves.join("")); //para juntar las letras para quitar las comas se le pasa un string vacio
  if (texto === alreves.join("")) {
    return true;
  } else {
    return false;
  }
}

//UTILIZAR EXPRESIONES REGULARES SE ELIMINAN LOS ESPACIOS QUE HAY EN UN TEXTO .replace(/\s+/g, '')
//para eliminar los datos que no sean alfanumericos .replace(/[^a-zA-Z0-9+]/g, "") y lo que no sea que lo reemplace por un espacio vacio
