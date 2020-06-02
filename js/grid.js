function grid() {
  // generar lienzo
  for (var i = 0; i < filas; i++) {
    for (var j = 0; j < columnas; j++) {
      context.beginPath();
      context.strokeStyle = "#21c08b";
      context.lineWidth = 8;
      context.lineCap = "round";
      context.rect(i * tamano, j * tamano, tamano, tamano);
      context.stroke();
    }
  }
}

function PintarObstaculos() {
  for (var x = 0; x < lienzo.length; x++)
    for (var y = 0; y < lienzo[x].length; y++) {
      if (lienzo[x][y] === 1) {
        context.fillStyle = "#3949ab";
        context.fillRect(x * tamano, y * tamano, tamano, tamano);
      }
    }
}

function drawPlayer(jugador, emoji) {
//   context.fillStyle = color;
  // context.fillText("🤬",10,10)
  context.drawImage(
    emoji,
    jugador.x * tamano,
    jugador.y * tamano,
    tamano,
    tamano
  );
//   context.fillRect(jugador.x * tamano, jugador.y * tamano, tamano, tamano);
}
