function margen(){
    const margen = document.getElementById("imagenId");
    margen.classList.toggle("imagenClass");
}
//Accede al elemento con imagenId y añade la clase imagenClass con classList.toggle

function verCard(){
    const kirby = document.querySelector('#kirby').value;
    const zelda = document.querySelector('#zelda').value;
    const mario = document.querySelector('#mario').value;
    const suma = Number(kirby) + Number(mario) + Number(zelda);
        document.querySelector('.seleccion_stickers').innerHTML = " " + suma;
    if(suma >= 11){
        const alerta = document.querySelector('.stickerSpan');
        alerta.innerHTML = " " + "¡Atención! Haz sobrepasado los 10 stickers permitidos";  
    }else{
        const alerta = document.querySelector('.stickerSpan');
        alerta.innerHTML = ""
    }
}

// ¡Atención! Haz sobrepasado los 10 stickers permitidos