let vDescarga = document.getElementById("descargar").value;
let vPuntuacion = document.getElementById("puntuacion").value;
let vPeso = document.getElementById("peso").value;

console.log(vDescarga);

let button = document.getElementById("agregar");

button.addEventListener("click", function () {
  nombre = document.getElementById("descargar").value;
  apellido = document.getElementById("puntuacion").value;
  correo = document.getElementById("peso").value;

  console.log(nombre);
});
