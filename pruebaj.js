class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("App encendida");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("App cerrada");
    }
  }
  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("App instalada correctamente");
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("App desinstalada correctamente");
    }
  }
  appInfo() {
    return `
      </br><b>Aplicaciones</b></br>
      Descargas: <b>${this.descargas}</b><br>
      Puntuacion: <b>${this.puntuacion}</b><br>
      Peso: <b>${this.peso}</b><br>
      <button id="eliminar">Eliminar</button><button>Editar</button><br>
      `;
  }
}

let P = [];
function addNewAdd(descarga, puntuacion, peso) {
  P.push(new App(descarga, puntuacion, peso));
}

function P2() {
  alert("hola");
}

let buttonAgregar = document.getElementById("agregar");

// button.firstChild.data = "pedro";

buttonAgregar.addEventListener("click", function () {
  let inpDescargar = document.getElementById("descargar").value;
  let inpPuntuacion = document.getElementById("puntuacion").value;
  let inpPeso = document.getElementById("peso").value;

  addNewAdd(inpDescargar, inpPuntuacion, inpPeso);

  let contend = document.getElementById("contend");

  contend.innerHTML = "";

  P.forEach(function (app) {
    contend.innerHTML += app.appInfo();
  });
});
