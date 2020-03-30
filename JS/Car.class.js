class Carro {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  MoverCarro(direccion, Imagen, PosicionesCaquitas) {
    switch (direccion) {
      case "ArrowUp":
        if (this.posicionY <= 0) return;
        Imagen.src = "./../assets/carro_arriba.png";
        Imagen.style.top = `${this.posicionY--}%`;
        break;

      case "ArrowLeft":
        if (this.posicionX <= 0) return;
        Imagen.src = "./../assets/carro_izquierda.png";
        Imagen.style.left = `${this.posicionX--}%`;
        break;

      case "ArrowRight":
        if (this.posicionX >= 94) return;
        Imagen.src = "./../assets/carro_derecha.png";
        Imagen.style.left = `${this.posicionX++}%`;
        break;

      case "ArrowDown":
        if (this.posicionY >= 90) return;
        Imagen.src = "./../assets/carro_abajo.png";
        Imagen.style.top = `${this.posicionY++}%`;
        break;
    }
    this.verificarColision(PosicionesCaquitas);
  }

  verificarColision(PosicionesCaquitas = []) {
    console.log(this.posicionX, this.posicionY);
    for (let i = 0; i < PosicionesCaquitas.length; i++) {
      if (
        this.posicionX >=
          Math.floor((PosicionesCaquitas[i].styleLeft + 33) / 10) &&
        this.posicionX <=
          Math.floor((PosicionesCaquitas[i].styleLeftMax + 33) / 10) &&
        this.posicionY >=
          Math.floor((PosicionesCaquitas[i].styleTop + 33) / 10) &&
        this.posicionY <=
          Math.floor((PosicionesCaquitas[i].styleTopMax + 33) / 10)
      ) {
        console.log("Esta Tocando Caquita");
      }
    }
  }
}
