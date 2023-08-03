const clickeado = document.querySelector("#imagenId");
let bordeRojo = false;
clickeado.addEventListener("click", borde);
function borde() {
  if (!bordeRojo) {
    clickeado.style.border = "2px solid red";
  } else {
    clickeado.style.border = "none";
  }
  bordeRojo = !bordeRojo;
}

function verCard() {
  const kirby = document.querySelector("#kirby").value;
  const zelda = document.querySelector("#zelda").value;
  const mario = document.querySelector("#mario").value;
  const suma = Number(kirby) + Number(mario) + Number(zelda);
  document.querySelector(".seleccion_stickers").textContent = " " + suma;
  if (suma >= 11) {
    const alerta = document.querySelector(".stickerSpan");
    alerta.textContent =
      " " + "¡Atención! Haz sobrepasado los 10 stickers permitidos";
  } else {
    const alerta = document.querySelector(".stickerSpan");
    alerta.textContent = "";
  }
}

function verkey() {
  const varizquierda = document.querySelector("#izquierda").value;
  const varcentro = document.querySelector("#centro").value;
  const varderecha = document.querySelector("#derecha").value;
  if (varizquierda == 9 && varcentro == 1 && varderecha == 1) {
    const pkey = document.querySelector(".pkey");
    pkey.textContent = "Contraseña 1 correcta";
  } else if (varizquierda == 7 && varcentro == 1 && varderecha == 4) {
    const pkey = document.querySelector(".pkey");
    pkey.textContent = "Contraseña 2 correcta";
  } else {
    const pkey = document.querySelector(".pkey");
    pkey.textContent = "Contraseña incorrecta";
  }
}


// function margen(){
//     const margen = document.getElementById("imagenId");
//     margen.classList.toggle("imagenClass");
// }
//Accede al elemento con imagenId y añade la clase imagenClass con classList.toggle.
//El metodo toggle() no se puede utilizar dentro de una condición if.
