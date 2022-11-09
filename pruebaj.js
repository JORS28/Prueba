class App {
  constructor(id, descargas, puntuacion, peso) {
    this.id = id;
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
      ID: <b>${this.id}</b><br>
      Descargas: <b>${this.descargas}</b><br>
      Puntuacion: <b>${this.puntuacion}</b><br>
      Peso: <b>${this.peso}</b><br>
      <button id="eliminar" ondblclick="P2()" >Eliminar</button><button>Editar</button><br>
      `;
  }
}

let Aplicaciones = [];

function addNewAdd(id, descarga, puntuacion, peso) {
  Aplicaciones.push(new App(id, descarga, puntuacion, peso));
}

function P2() {
  console.log("hola");
}

function Eliminar() {}

let buttonAgregar = document.getElementById("agregar");

// button.firstChild.data = "pedro";

buttonAgregar.addEventListener("click", function () {
  let inpId = document.getElementById("id").value;
  let inpDescargar = document.getElementById("descargas").value;
  let inpPuntuacion = document.getElementById("puntuacion").value;
  let inpPeso = document.getElementById("peso").value;

  addNewAdd(inpId, inpDescargar, inpPuntuacion, inpPeso);

  let contend = document.getElementById("contend");

  contend.innerHTML = "";
  Aplicaciones.forEach(function (app) {
    contend.innerHTML += app.appInfo();
  });
});
