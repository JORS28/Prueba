class App {
  constructor(id, descargas, puntuacion, peso) {
    this.id = id;
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    // this.iniciada = false;
    // this.instalada = false;
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
      <button id="eliminar" ondblclick="eliminar(${this.id})" >Eliminar</button><button id="editar" ondblclick="editar(${this.id})">Editar</button><br>
      `;
  }
}
let contend = document.getElementById("contend");
let Aplicaciones = [];

function addNewAdd(id, descarga, puntuacion, peso) {
  Aplicaciones.push(new App(id, descarga, puntuacion, peso));
}

function editar(id) {}

function eliminar(id) {
  Aplicaciones = Aplicaciones.filter(function (obj) {
    return obj.id != id;
  });
  contend.innerHTML = "";
  Aplicaciones.forEach(function (app) {
    contend.innerHTML += app.appInfo();
  });
}
// loacl store prueba 1
function localStorageList(split) {
  localStorage.setItem("localStorageList", JSON.stringify(split));
}

function P2() {
  alert("hola");
}
function AgregarD() {
  let inpId = document.getElementById("id").value;
  let inpDescargar = document.getElementById("descargas").value;
  let inpPuntuacion = document.getElementById("puntuacion").value;
  let inpPeso = document.getElementById("peso").value;

  addNewAdd(inpId, inpDescargar, inpPuntuacion, inpPeso);

  // prueba 1
  localStorageList(Aplicaciones);

  contend.innerHTML = "";
  Aplicaciones.forEach(function (app) {
    contend.innerHTML += app.appInfo();
  });
}

let buttonAgregar = document.getElementById("agregar");

// button.firstChild.data = "pedro";

buttonAgregar.addEventListener("click", AgregarD);

function P3() {
  mostrar = localStorage.getItem("Aplicaciones");
  console.log(mostrar);
  Aplicaciones = JSON.parse(mostrar) ?? [];

  contend.innerHTML = "";
  if (Aplicacicones != null)
    Aplicaciones.forEach(function (app) {
      contend.innerHTML += app.appInfo();
    });
}
