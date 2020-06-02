function click(event, canvas) {
  let pos = {
    x: Math.floor((event.clientX - canvas.offsetLeft) / tamano),
    y: Math.floor(
      (event.clientY - canvas.offsetTop + window.pageYOffset) / tamano
    ),
  };

  if (lienzo[pos.x][pos.y] === 1 && cont <= 0) {
    lienzo[pos.x][pos.y] = 0;
  } else {
    if (cont <= 0) lienzo[pos.x][pos.y] = 1;
  }

  if (cont === 2) {
    inicial = {
      x: pos.x,
      y: pos.y,
    };
    drawPlayer(inicial, emoji);
  }
  if (cont === 1) {
    final = {
      x: pos.x,
      y: pos.y,
    };
    drawPlayer(final, punt);
    const p=[inicial.x,inicial.y]
    
  } else {
    if (cont <= 0) PintarObstaculos();
  }
}
