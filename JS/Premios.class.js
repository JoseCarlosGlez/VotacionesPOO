class Premios {
  posicionX = 0;
  posicionY = 0;

  constructor(posicionX, posicionY) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
  }

  CrearImagen(Contenedor, sizeMarginLeft) {
    const imagen = document.createElement("img");
    imagen.src = "./../assets/popo.png";
    imagen.style.width = "50px";

    const styleLeft = this.posicionX - sizeMarginLeft;
    const styleTop = this.posicionY;

    imagen.style.left = `${styleLeft}px`;
    imagen.style.top = `${styleTop - 25}px`;

    Contenedor.appendChild(imagen);

    return {
      styleLeft,
      styleTop,
      styleLeftMax: styleLeft + 50,
      styleTopMax: styleTop + 50
    };
  }
}
