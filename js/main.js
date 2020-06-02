var filas;
var columnas;
var tamano = 40;
var lienzo = new Array(filas);
var context;
var canvas;
var cont;
var emoji = document.getElementById("emoji");
var punt = document.getElementById("punto");
var inicial = {
  x: 0,
  y: 0,
};
var final = {
  x: 0,
  y: 0,
};
var ruta = [];
var A_estrella = new Estrella();
function generarGrid() {
  A_estrella = new Estrella();
  cont = 2;
  var f = document.getElementById("filas");
  var c = document.getElementById("columnas");
  if (!f.value || !c.value) alert("Debe de indicar Filas y Columnas");
  document.getElementById("content").innerHTML =
    '<canvas id="canvas"></canvas>';

  filas = f.value;
  columnas = c.value;
  setup();
  grid();
  PintarObstaculos();
}

function setup() {
  canvas = document.getElementById("canvas");
  canvas.width = filas * tamano;
  canvas.height = columnas * tamano;

  canvas.addEventListener(
    "click",
    (e) => {
      click(e, canvas);
      cont = cont - 1;
    },
    false
  );

  context = canvas.getContext("2d");
  context.clearRect(0, 0, tamano * filas, tamano * columnas);

  // generar Lienzo
  for (var i = 0; i < filas; i++) {
    lienzo[i] = new Array(columnas);
    for (var j = 0; j < columnas; j++) {
      let valor = Math.floor(Math.random() * 100 + 1);
      if (valor <= 20) {
        lienzo[i][j] = 1;
      } else {
        lienzo[i][j] = 0;
      }
    }
  }
}

function buscar() {
  if (cont <= 0) {
    A_estrella.set(inicial, final, lienzo);

    ruta = A_estrella.buscar();
    ruta.reverse();
    // console.log(inicial, ruta);
    var tiempoRecorrido = 0;
    var tiempo = setInterval(() => {
      if (tiempoRecorrido >= ruta.length - 1) {
        clearInterval(tiempo);
      }
      inicial.x = ruta[tiempoRecorrido][0];
      inicial.y = ruta[tiempoRecorrido][1];
      drawPlayer(inicial, emoji);

      tiempoRecorrido++;
    }, 100);
  } else {
    alert("Debe indicar el Inicio y el Final");
  }
}
